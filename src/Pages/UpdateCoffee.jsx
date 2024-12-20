import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {

  const loadedCoffee = useLoaderData();
  const {_id, coffee, chef, supplier, taste, category, details, price, photo } =
    loadedCoffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const coffee = form.coffee.value;
    const price = form.price.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updateCoffeeInfo = {
      coffee,
      price,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(updateCoffeeInfo);
    console.log(_id);

    fetch(`https://y-two-puce.vercel.app/updateCoffee/${_id}`, {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateCoffeeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="bg-[url('../../images/more/11.png')] bg-no-repeat m-5 md:m-20">
      <div className=" md:w-4/5 mx-auto p-4 md:p-24 bg-[#F4F3F0] space-y-5">
        <h3 className="font-rancho text-center text-5xl drop-shadow-xl text-[#374151] ">
          Update Existing Coffee Details
        </h3>
        <p className="font-raleway text-lg md:w-2/3 mx-auto">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <div>
          <form onSubmit={handleUpdateCoffee}>
            <div className="flex flex-col md:flex-row w-full gap-5">
              <div className="flex-1">
                <label className="label text-xl">Coffee Name</label>
                <input
                  name="coffee"
                  defaultValue={coffee}
                  type="text"
                  placeholder="Enter coffee name"
                  className="w-full input focus:outline-none focus:border-none"
                />
              </div>

              <div className="flex-1">
                <label className="label text-xl">Chef</label>
                <input
                  name="chef"
                  defaultValue={chef}
                  type="text"
                  placeholder="Enter coffee chef"
                  className="w-full input focus:outline-none focus:border-none"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full gap-5">
              <div className="flex-1">
                <label className="label text-xl">Supplier</label>
                <input
                  name="supplier"
                  defaultValue={supplier}
                  type="text"
                  placeholder="Enter coffee supplier"
                  className="w-full input focus:outline-none focus:border-none"
                />
              </div>

              <div className="flex-1">
                <label className="label text-xl">Taste</label>
                <input
                  name="taste"
                  defaultValue={taste}
                  type="text"
                  placeholder="Enter coffee taste"
                  className="w-full input focus:outline-none focus:border-none"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full gap-5">
              <div className="flex-1">
                <label className="label text-xl">Category</label>
                <input
                  name="category"
                  defaultValue={category}
                  type="text"
                  placeholder="Enter coffee category"
                  className="w-full input focus:outline-none focus:border-none"
                />
              </div>

              <div className="flex-1">
                <label className="label  text-xl">Details</label>
                <input
                  name="details"
                  defaultValue={details}
                  type="text"
                  placeholder="Enter coffee details"
                  className="w-full input focus:outline-none focus:border-none"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full gap-5">
              <div className="flex-1">
                <label className="label text-xl">Price</label>
                <input
                  name="price"
                  defaultValue={price}
                  type="text"
                  placeholder="Enter coffee price"
                  className="w-full input focus:outline-none focus:border-none"
                />
              </div>

              <div className="flex-1">
                <label className="label text-xl">Photo</label>
                <input
                  name="photo"
                  defaultValue={photo}
                  type="text"
                  placeholder="Enter photo URL"
                  className="w-full input focus:outline-none focus:border-none"
                />
              </div>
            </div>

            <button className="btn my-5 text-xl font-rancho w-full bg-[#D2B48C]">
              Update Coffee Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
