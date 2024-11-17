import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import counselling from "../../assets/counselling.svg";
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { Button } from "@nextui-org/button";

export default function ContactComponent() {
  return (
    <div className="grid w-[70vw] md:m-10 md:mb-0">
      <Card className="md:py-20 md:p-5 ">
        <CardBody className="overflow-visible p-0 flex flex-row justify-center ">
          <Image
            width="fit-content"
            alt="chat"
            className="w-full object-cover h-[150px] md:h-[300px]"
            src={counselling}
          />
        </CardBody>
        <CardFooter className="text-small flex-col gap-10 justify-center ">
          <Button variant="default" className="bg-black text-white">
            Book Appointment
          </Button>
          <p className="text-sm text-center">
            Schedule a session with us to discuss your concerns,
            plans, or any queries you may have. He is here to assist you in any
            way he can.
          </p>
        </CardFooter>
        <CardBody className="overflow-visible p-0 flex flex-column justify-center ">
          <div className="flex flex-row mb-5">
            <FaInstagram
              className="w-full object-cover sm:h-9 md:h-10"
              style={{ cursor: "pointer" }}
            />
            <FaFacebook
              className="w-full object-cover sm:h-9 md:h-10"
              style={{ cursor: "pointer" }}
            />

            <FaYoutube
              className="w-full object-cover sm:h-9 md:h-10"
              style={{ cursor: "pointer" }}
            />
            <FaLinkedin
              className="w-full object-cover sm:h-9 md:h-10"
              style={{ cursor: "pointer" }}
            />
            <BsTwitterX
              className="w-full object-cover sm:h-9 md:h-10"
              style={{ cursor: "pointer" }}
            />
            <MdOutlineMail
              className="w-full object-cover sm:h-9 md:h-10"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="text-center mb-4 sm:text-lg lg:text-xl">
            <h1 className="font-extrabold">Follow Our Website</h1>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
