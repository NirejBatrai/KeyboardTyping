import React from "react";
import { FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsShieldLock, BsFileText } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

function Footer() {
  return (
    <footer className='flex items-center justify-between px-6 py-3 bg-gray-500 text-gray-700 text-sm'>
      {/* Icon Links */}
      <div className='flex  gap-4 items-center justify-center'>
        {/* Contact Support */}
        <a
          href='mailto:support@example.com'
          className='flex flex-col items-center hover:text-gray-600'
        >
          <HiOutlineMail size={15} />
          <span className='text-sm'>Support</span>
        </a>

        {/* GitHub */}
        <a
          href='https://github.com'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center hover:text-gray-600'
        >
          <FaGithub size={15} />
          <span className='text-sm'>GitHub</span>
        </a>

        {/* Discord */}
        <a
          href='https://discord.com'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center hover:text-gray-600'
        >
          <FaDiscord size={15} />
          <span className='text-sm'>Discord</span>
        </a>

        {/* Twitter */}
        <a
          href='https://twitter.com'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center hover:text-gray-600'
        >
          <FaTwitter size={15} />
          <span className='text-sm'>Twitter</span>
        </a>

        {/* Terms */}
        <a
          href='/terms'
          className='flex flex-col items-center hover:text-gray-600'
        >
          <AiOutlineSafetyCertificate size={15} />
          <span className='text-sm'>Terms</span>
        </a>

        {/* Security */}
        <a
          href='/security'
          className='flex flex-col items-center hover:text-gray-600'
        >
          <BsShieldLock size={15} />
          <span className='text-sm'>Security</span>
        </a>

        {/* Privacy */}
        <a
          href='/privacy'
          className='flex flex-col items-center hover:text-gray-600'
        >
          <BsFileText size={15} />
          <span className='text-sm'>Privacy</span>
        </a>
      </div>

      {/* Footer Text */}
      <p className='text-xs text-gray-1000'>
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
