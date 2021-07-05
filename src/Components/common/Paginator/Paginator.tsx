import styles from "./Paginator.module.css";
import React, {useState} from "react";
import {Button} from "@material-ui/core";
import style from "./Paginator.module.css";


export type PaginatorPropsType = {
    currentPage: number;
    pageSize: number;
    totalItemsCount: number;
    onPageChanged: (p: number) => void;
    portionSize: number;
}


const Paginator = (props: PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize) //округляем в большую сторону
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount/props.portionSize)
    let [portionNumber,setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize


    return <div className={styles.paginator}>


        { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p<= rightPortionPageNumber)
            .map(p => {
                return <span
                    className={props.currentPage === p ? styles.selectedPage : ''}
                    key={p}
                    onClick={() => {
                        props.onPageChanged(p)
                    }}> {`${p} `}</span>
            })}

        { portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }

    </div>
}
export default Paginator;


// function Paginator(props: PaginatorPropsType) {
//     let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
//     let pages = [];
//
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i)
//     }
//
//     let portionCount = Math.ceil(pagesCount / props.portionSize)
//     let [portionNumber, setPortionNumber] = useState<number>(1)
//     let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
//     let rightPortionPageNumber = portionNumber * props.portionSize
//
//
//     const buttonPrev = portionNumber > 1 &&
//         <Button onClick={() => {
//             setPortionNumber(portionNumber - 1)
//         }} name={'PREV'}/>
//
//     const buttonNext = portionCount > portionNumber &&
//         <Button onClick={() => {
//             setPortionNumber(portionNumber + 1)
//         }} name={'NEXT'}/>
//
//     const paginatorNumbers = pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
//         .map(p => {
//             return <span
//                 className={props.currentPage === p ? style.selectedPage : style.paginatorNumber}
//                 key={p}
//                 onClick={() => {
//                     props.onPageChanged(p)
//                 }}>
//                             {`${p} `}
//                         </span>
//         })
//
//     return (
//         <div className={style.paginator}>
//             {buttonPrev}
//             {paginatorNumbers}
//             {buttonNext}
//         </div>
//     );
// }
// export default Paginator;