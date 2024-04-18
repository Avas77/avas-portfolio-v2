import React from "react";
import BlockHeader from "../BlockHeader";
import SocialContact from "../SocialContact";
import ContactsDescription from "../ContactsDescription";
import ContactsBox from "../ContactsBox";
import LinkButton from "../ImageButton";

const Contacts = () => {
  const socailContacts = (
    <>
      <LinkButton
        openInNewtab
        url="https://www.linkedin.com/in/avas-bajracharya-640357200/"
      >
        <SocialContact
          path={"/assets/social-links/Linkedin.svg"}
          label="Avas Bajracharya"
          width={30}
          height={20}
        />
      </LinkButton>
      <LinkButton url="mailto:avasbajracharya9@gmail.com">
        <SocialContact
          path={"/assets/social-links/mail.svg"}
          label="avasbajracharya9"
          width={30}
          height={32}
        />
      </LinkButton>
    </>
  );
  return (
    <section className="mb-[145px] px-4 xl:px-0">
      <BlockHeader title="contacts" classNames="w-[127px]" />
      <div className="flex mt-[45px] flex-col md:flex-row">
        <div className="flex-1">
          <ContactsDescription />
        </div>
        <div className="flex-1 flex justify-center md:justify-end mt-20 md:mt-0">
          <ContactsBox contents={socailContacts} title="Message me here" />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
