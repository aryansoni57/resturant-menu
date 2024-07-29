const Jewels = () => {
  return (
    <div className="">
      <h1>Featured Products</h1>
      <div className="flex">
        {/* cover image */}
        <div className="flex-1 flex justify-center items-center bg-red-500 h-[80vh]">
          <img
            className="object-cover size-full"
            src="/jewlery/cover.png"
            alt=""
          />
        </div>
        {/* other products */}

        <div className="flex flex-col flex-1 gap-8 ">
          {/* row 1 */}
          <div className="flex flex-1 gap-4 ">
            <div className="flex flex-col flex-1 max-h-full ">
              <div className="h-full bg-yellow-500">
                <img
                  src="/public/jewlery/p1.jpg"
                  className="max-h-full"
                  alt=""
                />
              </div>
              <div className="">
                <h1>Chain Necklace Gold</h1>
              </div>
            </div>
            <div className="flex flex-col flex-1 h-full">
              {/* <img src="/public/jewlery/p1.jpg" className="" alt="" /> */}
              <div className="">
                <h1>Chain Necklace Gold</h1>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-red-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Jewels;
