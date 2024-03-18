const Service = ({
  img,
  title,
  text,
  price,
  url,
  btnText,
}: {
  img: string;
  title: string;
  text: object;
  price: number;
  url: string;
  btnText: string;
}) => {
  return (
    <div className="min-h-[40em] flex flex-col justify-between gap-4 font-body border border-neutral-200 border-2 p-4 lg:p-8 rounded-sm">
      <div>
        <h3 className="text-3xl font-bold uppercase">{title}</h3>
        <h4 className="text-[#ff0000] font-bold text-3xl py-2">{price}Kč</h4>
        {Object.entries(text).map(([Key, value], val: number) => (
          <div key={Key}>
            {val === 0 ? (
              <a href="#why" className="text-[#ff0000] font-bold">
                {value}
              </a>
            ) : (
              <p key={Key} className=" py-2">
                {value}
              </p>
            )}
          </div>
        ))}
      </div>
      <a
        className="bg-[#ff0000] text-center p-4 uppercase font-bold rounded-sm hover:bg-[#ff0000]/80 transition ease-in-out 150"
        href={url}
      >
        {btnText}
      </a>
    </div>
  );
};

export default Service;
