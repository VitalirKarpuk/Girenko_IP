import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Button } from '../atoms/button';
import style from './index.module.css';
import classnames from 'classnames';
import useBag from '../../redux/hooks/useBag';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
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
              <Card className={classnames(classes.root, style.card)} key={item.sys.id}>
                <div className={style.headerCard}>
                  <CardHeader
                    title={item?.fields?.typeMenu?.content[0].content[0].value || ''}
                    subheader={item?.fields?.material?.content[0].content[0].value || ''}
                    className={style.headerTitle}
                  />
                </div>
                <CardMedia
                  className={classes.media}
                  image={item.fields.img[0].fields.file.url}
                  title={item.fields.img[0].fields.title}
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {item?.fields?.price?.content[0].content[0].value || 'не указана'}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.fields.description}
                  </Typography>
                </CardContent>
                <div className={style.buttons}>
                  <Button text={'В корзину'} onClick={() => handleAddToBag(item)} />
                  <Link href="/menu/[menu]" as={`/menu/${item.sys.id}`}>
                    <Button text={'Подробнее'} />
                  </Link>
                </div>
              </Card>
            );
          })}
      </div>
    </>
  );
}
