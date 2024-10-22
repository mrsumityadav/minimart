import React, { useContext } from "react";
import { ProductContext } from "../utils/context";
import { Link } from "react-router-dom";

function Nav() {
  const [product] = useContext(ProductContext);

  let diff_category =
    product && product.reduce((acc, cv) => [...acc, cv.category], []);
  diff_category = [...new Set(diff_category)];

  const diff_color = () => {
    return `rgba(${Math.floor(Math.random() * 255)},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.5)`;
  };

  return (
    <>
      <nav className="w-[15%] py-5 h-screen bg-zinc-100 flex flex-col items-center gap-3">
        <a
          href="/"
          className="border rounded-md border-blue-400 hover:bg-blue-200 px-3 py-2"
        >Home</a>
        <hr className="my-3 w-[80%]" />
        <h1 className="text-xl w-[70%]">Category Filter</h1>
        <div className="w-[70%] flex flex-col gap-4 mt-3">
          {diff_category.map((item, index) => (
            <Link
              key={index}
              to={`./?category=${item}`}
              className="flex text-sm font-semibold items-center gap-3"
            >
              <span
                style={{ backgroundColor: diff_color() }}
                className={`inline-block w-3 h-3 rounded-full`}
              ></span>{" "}
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Nav;
