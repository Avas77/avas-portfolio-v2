import React from "react";

interface IContactsBox {
  contents: React.JSX.Element;
  title: string;
}

const ContactsBox = ({ contents, title }: IContactsBox) => {
  return (
    <section className="border border-white p-4 w-full h-full md:w-fit md:h-fit">
      <h6 className="font-semibold mb-4">{title}</h6>
      <div className="flex flex-col gap-2">{contents}</div>
    </section>
  );
};

export default ContactsBox;
