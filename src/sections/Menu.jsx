import React, { useEffect, useState } from "react";
import CreateNewProduct from "../components/CreateNewProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  create_product,
  delete_product,
  fetch_products,
  update_product,
} from "../redux/reducers/product_slice";
import { error, success } from "../redux/reducers/notification_slice";

export default function Menu() {
  const { products, loading_products, loading_create } = useSelector(
    (state) => state.product
  );

  const [create, setcreate] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_products());
  }, [create]);

  const handleCreate = (inputs) => {
    dispatch(create_product(inputs));
  };

  const Product = ({ _id, name, price, desc, status }) => {
    const [updating, setupdating] = useState(false);
    const [deleting, setdeleting] = useState(false);

    const handleDelete = () => {
      setdeleting(true);
      dispatch(delete_product(_id)).then((res) => {
        if (res.error) {
          dispatch(error(res.error.message));
        } else {
          dispatch(success("Removed"));
          dispatch(fetch_products());
        }
        setdeleting(false);
      });
    };

    const handleUpdate = () => {
      setupdating(true);
      dispatch(update_product(_id)).then((res) => {
        if (res.error) {
          dispatch(error(res.error.message));
        } else {
          dispatch(success("Updated"));
          dispatch(fetch_products());
        }
        setupdating(false);
      });
    };

    return (
      <div className="m-2 p-2 rounded-lg bg-black bg-opacity-25">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <h1>{`$${price}`}</h1>
        </div>
        <p>{desc}</p>
        <div className="bg-black bg-opacity-50 py-[2px] my-2" />
        <div className="flex justify-evenly gap-1">
          <button
            className="bg-black bg-opacity-50 w-full py-[1px] rounded-lg uppercase hover:bg-opacity-25"
            onClick={() => handleUpdate()}
            disabled={updating}
          >
            {status}
          </button>
          <button
            className="bg-black bg-opacity-50 w-full py-[1px] rounded-lg uppercase hover:bg-opacity-25"
            onClick={() => handleDelete()}
            disabled={deleting}
          >
            remove
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black bg-opacity-50 w-full rounded-lg text-white">
      {create ? (
        <CreateNewProduct
          setcreate={setcreate}
          create_product={handleCreate}
          loading={loading_create}
        />
      ) : (
        <>
          <div className="bg-black bg-opacity-50 p-2 rounded-t-lg flex justify-between items-center">
            <h1 className="text-center text-3xl font-semibold">Menu</h1>
            <button
              className="text-4xl bg-black w-[50px] pb-2 bg-opacity-25 rounded-lg"
              onClick={() => {
                setcreate(true);
              }}
            >
              +
            </button>
          </div>
          {loading_products ? (
            <div className="flex justify-center items-center h-full">
              <img src="/svg/loader.svg" width={50} height={50} />
            </div>
          ) : (
            <ul className="max-h-[730px] overflow-y-auto">
              {products.map((product) => {
                return (
                  <li key={product._id}>
                    <Product {...product} />
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
