const MenuItem = ({ name, desc, price, image }) => {
  return (
    <div className="flex mx-2 my-4">
      <img src={image} className="rounded-full size-16" />
      <div className="">
        <h1>{name}</h1>
        <div className="flex items-center gap-8 text-gray-400 ">
          <p className="text-sm">{desc}</p>
          <p className="">·------·</p>
          <p>Rs {price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
