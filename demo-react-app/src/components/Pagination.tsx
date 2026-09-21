type PaginationProps = {
    start: number;
    total: number;
    pageSize: number;
    onPage: (page: number) => void;
};

export default function Pagination({ start, total, pageSize, onPage }: PaginationProps) {
    const currentPage = start;
    const totalPages = Math.ceil(total / pageSize);
    const next = () => {
        if (currentPage === totalPages) return;
        onPage(currentPage + 1);
    };
    const prev = () => {
        if (currentPage === 1) return;
        onPage(currentPage - 1);
    };
    return (
        <div>
            Pagination Component<br/>

            Total Pages: {totalPages}<br/> (page size): {pageSize}<br/>
            Current Page: {currentPage}<br/>
            
            <button onClick={next}>Increment</button>
            <button onClick={prev}>Decrement</button>
        </div>
    );
}