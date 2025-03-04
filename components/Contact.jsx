import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Contact = () => {
const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "01824a0c-dee2-467f-8cfd-f20691ca7419");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div 
     initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='contact' 
       className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none">
       
       <motion.h4 
        initial={{opacity: 0, y: -20}}
       whileInView={{opacity: 1, y: 0}}
       transition={{duration: 0.5, delay: 0.3}}
       className='text-center mb-2 text-lg font-Ovo' >Connect with Me</motion.h4>
    
      <motion.h2 
       initial={{opacity: 0, y: -20}}
       whileInView={{opacity: 1, y: 0}}
       transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-Ovo'>Get in touch</motion.h2>

      <motion.p 
      initial={{opacity: 0}}
       whileInView={{opacity: 1}}
       transition={{duration: 0.5, delay: 0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
          I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </motion.p>
      
      <motion.form 
      initial={{opacity: 0}}
       whileInView={{opacity: 1}}
       transition={{duration: 0.5, delay: 0.9}}
      onSubmit={onSubmit} action="" className="max-w-2xl mx-auto">
 

  <div className="mb-6">
    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 dark:text-white/80">
      Name
    </label>
    <motion.input
    initial={{opacity: 0, x: -50}}
     whileInView={{opacity: 1, x: 0}}
     transition={{duration: 0.6, delay: 1.1}}
    name='name'
      type="text"
      id="name"
      placeholder="Enter your name"
      required
      className="w-full p-3 outline-none border border-gray-300 rounded-md bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-darkHover/30 dark:border-white/90"
    />
  </div>


  <div className="mb-6">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 dark:text-white/80">
      Email
    </label>
    <motion.input
    initial={{opacity: 0, x: -50}}
    whileInView={{opacity: 1, x: 0}}
    transition={{duration: 0.6, delay: 1.2}}
      name='email'
      type="email"
      id="email"
      placeholder="Enter your email"
      required
      className="w-full p-3 outline-none border border-gray-300 rounded-md bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-darkHover/30 dark:border-white/90"
    />
  </div>

  <div className="mb-6">
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 dark:text-white/80">
      Message
    </label>
    <motion.textarea
    initial={{opacity: 0, y: 100}}
     whileInView={{opacity: 1, y: 0}}
     transition={{duration: 0.6, delay: 1.3}}
      name='message'
      id="message"
      rows="6"
      placeholder="Enter your message"
      required
      className="w-full p-4 outline-none border border-gray-300 rounded-md bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-darkHover/30 dark:border-white/90"
    ></motion.textarea>
  </div>

  <div className="flex justify-center">
  <motion.button
     whileHover={{scale: 1.05}}
     transition={{duration: 0.3}}
    type="submit"
    className="flex items-center justify-between w-max bg-black/80 text-white py-3 px-8 rounded-full hover:bg-black focus:outline-none gap-2 duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
  >
    Submit now <Image src={assets.right_arrow_white} alt='submit' className='w-4' />
  </motion.button>
  </div>

  <p className='mt-4'>
    {result}
  </p>
</motion.form>
      
    </motion.div>
  )
}

export default Contact