import FooterNav from "./FooterNav";
import FollowMe from "./FollowMe";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer-main">
        <FooterNav />
        <FollowMe />
      </div> */}
      <div className="footer-bottom text-center flex flex-col ">
        <div>
          <p>
            Build with <span className="text-red-500 animate-pulse">♥</span> by Techies
          {/* <span className="animate-pulse">♥</span> */}
          </p>
        </div>
        <div>
          <p>© 2024 Team Techies. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
