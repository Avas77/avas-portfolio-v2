import BlockHeader from "@/components/BlockHeader";
import ContactsBox from "@/components/ContactsBox";
import ContactsDescription from "@/components/ContactsDescription";
import PageHeader from "@/components/PageHeader";
import SocialContact from "@/components/SocialContact";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contacts = () => {
  const content = (
    <span>
      <Link href="/" target="_blank">
        Avas77
      </Link>
    </span>
  );

  const socailContacts = (
    <>
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
    </>
  );
  return (
    <section className="mt-[53px]">
      <PageHeader title="contacts" description="Reach out to me" />
      <div className="flex justify-between gap-[100px] mt-[46px] mb-[25px]">
        <ContactsDescription />
        <div className="flex gap-[11px]">
          <ContactsBox contents={content} title="Support me here" />
          <ContactsBox contents={socailContacts} title="Message me here" />
        </div>
      </div>
      <div className="flex flex-col gap-[21px]">
        <BlockHeader title="all-media" classNames="hidden" />
        <div className="flex items-center gap-[5px]">
          <Image
            src="/assets/social-links/Twitter.svg"
            alt="twitter"
            width={32}
            height={32}
          />
          <span>Avas Bajracharya</span>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
