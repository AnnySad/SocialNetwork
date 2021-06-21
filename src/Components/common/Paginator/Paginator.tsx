import styles from "./Paginator.module.css";
import React from "react";


type PaginatorPropsType = {
    currentPage: number;
    pageSize: number;
    totalUsersCount: number;
    onPageChanged: (p: number) => void;
}


let Paginator = (props: PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) //округляем в большую сторону
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
            {pages.map(p => {
                return <span
                    onClick={() => {
                        props.onPageChanged(p)
                    }}
                    className={p === props.currentPage ? styles.selectedPage : ""}
                >{p}</span>
            })}
        </div>
}
export default Paginator;