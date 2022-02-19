import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import style from './index.module.css';
import classnames from 'classnames';
import useBag from '../../redux/hooks/useBag';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      backgroundSize: 'contain',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      backgroundSize: 'contain',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

export default function ListProduct({ props }: any) {
  const classes = useStyles();
  const bag = useBag();

  const handleAddToBag = (item: any) => {
    bag.actions.addToBag(item);
  };

  return (
    <>
      <div className={style.wrapper}>
        {props &&
          props?.map((item: any) => {
            return (
              <Card key={item.fields?.flowers?.fields?.title} className={classnames(classes.root, style.card)}>
                <img
                  className={style.image}
                  src={item.fields?.flowers?.fields?.file?.url}
                  alt={item.fields?.flowers?.fields?.title}
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    2.20 руб/ шт.
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.fields?.flowers?.fields?.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </>
  );
}
