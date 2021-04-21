import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { menuList } from '../../common/constants';
import style from './index.module.css';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    width: 300,
  },
});

export default function FileSystemNavigator() {
  const classes = useStyles();

  return (
    <div className={style.menuWrapper}>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {menuList &&
          menuList.map((element, index) => {
            return element.submenu ? (
              <TreeItem nodeId={element.id} label={element.title} key={index.toString()}>
                {element?.submenu &&
                  element.submenu.url.map((item, index) => {
                    return (
                      <Link href="/[id]" as={`/${item}`} key={index.toString()}>
                        <TreeItem nodeId={element.id + index} label={item} />
                      </Link>
                    );
                  })}
              </TreeItem>
            ) : (
              <Link href="/[id]" as={`/${element.url}`} key={index.toString()}>
                <TreeItem nodeId={element.id} label={element.title}></TreeItem>
              </Link>
            );
          })}
      </TreeView>
    </div>
  );
}
