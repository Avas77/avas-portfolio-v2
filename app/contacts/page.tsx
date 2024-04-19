import BlockHeader from "@/components/BlockHeader";
import ContactsBox from "@/components/ContactsBox";
import ContactsDescription from "@/components/ContactsDescription";
import LinkButton from "@/components/ImageButton";
import PageHeader from "@/components/PageHeader";
import SocialContact from "@/components/SocialContact";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contacts = () => {
  const content = (
    <span>
      <Link href="https://github.com/Avas77" target="_blank">
        Avas77
      </Link>
    </span>
  );

  const socailContacts = (
    <>
      <LinkButton
        url="https://www.linkedin.com/in/avas-bajracharya-640357200/"
        openInNewtab
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
    <section className="mt-[53px] px-4 xl:px-0">
      <PageHeader title="contacts" description="Reach out to me" />
      <div className="flex flex-col md:flex-row justify-between gap-[80px] md:gap-[100px] mt-[46px] mb-[75px] md:mb-[25px]">
        <ContactsDescription />
        <div className="flex flex-col md:flex-row items-center md:items-start gap-[11px]">
          <ContactsBox contents={content} title="Support me here" />
          <ContactsBox contents={socailContacts} title="Message me here" />
        </div>
      </div>
      <div className="flex flex-col gap-[21px] mb-[60px]">
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
