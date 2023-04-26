import React from 'react'

export default function Pagination({ count, setPage, page }) {
    // calculate the total possible amount of pages. ex. 10
    const totalPages = Math.ceil(count / 10)

    // use the possible number of pags to create an array of that amount
    const pagesArray = [...Array(totalPages).keys()]

    function pageHandler(newPage){
        if (newPage !== page ){
            setPage(newPage)
        }
    }

    function nextPrevHandler(direction){
        if (direction === 'previous'){
            if (page !== 1){
                setPage(page-1)
            }
        }else{
            if(page !== totalPages){
                setPage(page+1)
            }
        }
    }

    return (
        <div id = "pageBtnRow" className="pageBtnRow">
            <button onClick={()=>nextPrevHandler('previous')}> {'<'} </button>

            {pagesArray.map((pageNum)=> <button  key={pageNum} className={`paginationBtn ${page === (pageNum + 1) ? 'paginationActive': '' }`} onClick={()=>pageHandler(pageNum+1)}>{pageNum+1}</button> )}
            
            <button onClick={()=>nextPrevHandler('next')}> {">"}</button>
        </div>
    )
}