import React from "react";
import BlockHeader from "../BlockHeader";
import SocialContact from "../SocialContact";

const Contacts = () => {
  return (
    <section className="mb-[145px]">
      <BlockHeader title="contacts" classNames="w-[127px]" />
      <div className="flex mt-[45px]">
        <div className="flex-1">
          <p className="w-[505px] text-gray">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <section className="border border-white p-4 w-fit">
            <h6 className="font-semibold mb-4">Message me here</h6>
            <div className="flex flex-col gap-2">
              <SocialContact
                path={"/assets/social-links/Linkedin.svg"}
                label="Avas Bajracharya"
                width={30}
                height={20}
              />
              <SocialContact
                path={"/assets/social-links/mail.svg"}
                label="avasbajracharya9"
                width={30}
                height={32}
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
