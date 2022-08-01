

type Props = {
  Icon: any;
  name: string;
  children: any;
};

function BtnAction({ Icon, name, children }: Props) {
  return (
    <div className="mt-5 grid h-10 w-full grid-cols-2 gap-y-3    ">
      <div className="flex items-center justify-start">
        <Icon className="h-8 text-gray-600  dark:text-white " />
        <h1 className="center ml-2 h-10">{name}</h1>
      </div>
      <div className=" flex justify-end ">{children}</div>
    </div>
  );
}

export default BtnAction;
