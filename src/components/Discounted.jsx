import React from "react";
import Book from "./ui/Book";

const Discounted = ({ books }) => {
  return (
    <section id="recent">
      <div className="row">
        <h2 className="section__title">
          Discount <span className="purple">Books</span>
        </h2>
        <div className="books">
          {books
            .filter((book) => book.salePrice > 0)
            .slice(0, 8)
            .map((book) => (
              <Book book={book} key={book.id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Discounted;
