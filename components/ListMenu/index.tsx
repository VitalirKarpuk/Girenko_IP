import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { menuList } from '../../common/constants';
import styles from './index.module.css';
import classNames from 'classnames';
import { useRouter } from 'next/router';



export default function FileSystemNavigator() {
    const router = useRouter();
console.log(router);


    const LinkStyleHome = classNames( {
        [styles.linkActiveHome]: '/' === router.asPath,
    });
    const LinkStyleAdvice = classNames( {
        [styles.linkActiveAdvice]: '/advice' === router.asPath,
    });
    
    const LinkStyleContacts = classNames( {
        [styles.linkActiveContacts]: '/contacts' === router.asPath,
    });
    return (
        <div className={styles.menuWrapper}>
            <Link href="/" as={`/`} ><span className={LinkStyleHome}>ТЮЛЬПАНЫ</span></Link>
            <Link href="/advice" as={`/advice`}><span className={LinkStyleAdvice}>СОВЕТЫ</span></Link>
            <Link href="/advice" as={`/contacts`}><span className={LinkStyleContacts}>КОНТАКТЫ</span></Link>

        </div>
    );
}
