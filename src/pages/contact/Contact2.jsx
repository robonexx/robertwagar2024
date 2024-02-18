import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FcCheckmark } from 'react-icons/fc';
import { IoIosPin } from 'react-icons/io';
import { HiPhone } from 'react-icons/hi2';
import { AiOutlineMail } from 'react-icons/ai';
import { RiGithubLine, RiCodepenLine } from 'react-icons/ri';

import Coffee from './_components/coffee/Coffee';
import Headline from '../../components/headline/Headline';
import BgEllipse from '../../components/bgellipse/BgEllipse';
import PageTransition from '../../components/animations/PageTransition';

import styles from './contact2.module.scss';
import Grid from '../../components/_ui/gridsystem/Grid';
import GridItem from '../../components/_ui/gridsystem/GridItem';
import useMediaQuery from '../../hooks/useMediaQuery';

const Contact2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [validationMessage, setValidationMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();
  const form = useRef();

  const isDesktop = useMediaQuery('(min-width: 768px)');

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
    if (e.target.name === 'email') {
      const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        value
      );
      const inputField = e.target.parentElement;
      inputField.style.borderColor = isValidEmail ? 'green' : 'red';
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    form.current.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = form.current.checkValidity();
    if (isValid) {
      console.log('is valid');
      emailjs
        .sendForm(
          import.meta.env.VITE_SENDER_ID,
          import.meta.env.VITE_TEMP_ID,
          form.current,
          import.meta.env.VITE_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
      setValidationMessage(
        'Thanks you for getting in touch with me, I will answer your email shortly!'
      );
      setTimeout(() => {
        setValidationMessage('');
      }, 4000);
      setIsButtonDisabled(true);
      resetForm();
      setTimeout(() => {
        navigate('/');
      }, 5000);

      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 30000);
    } else {
      console.log('is not valid');
      setValidationMessage(
        'Oops! My funky friend, It looks like you missed something. Please check and fill in all required fields.'
      );
    }
  };

  /*  console.log(`name: ${formData.name} \n
        email: ${formData.email}  \n
        subject: ${formData.subject} \n
        message: ${formData.message}`); */

  return (
    <div className={styles.contact}>
      <PageTransition />
      <BgEllipse />
      <div className={styles.top_section}>
        <Headline title='Contact' />
      </div>
      {isDesktop ? (
        <Grid>
          <GridItem>
            <motion.h2
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 2, ease: 'easeOut' }}
            >
              Thank you for visiting my portfolio!
                      </motion.h2>
                      <motion.p
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 2.2, ease: 'easeOut' }}
            >
              I appreciate your interest and would love to hear from you. Please
              feel free to reach out regarding any inquiries, opportunities, or
              feedback you may have. I'm always excited to connect with fellow
              developers, clients, and industry professionals.
            </motion.p>
          </GridItem>
          <GridItem>
            <motion.form
              className={styles.contact_form}
              noValidate
              ref={form}
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.4, ease: 'easeOut' }}
            >
              <label>Name</label>
              <div className={styles.input_field}>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={onChangeHandler}
                  required
                  minLength={3}
                  maxLength={15}
                />
                <span className={styles.check_icon}>
                  <FcCheckmark />
                </span>
              </div>
              <label>Email</label>
              <div className={styles.input_field}>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={onChangeHandler}
                  required
                />
                <span className={styles.check_icon}>
                  <FcCheckmark />
                </span>
              </div>
              <label>How did you hear about me?</label>
              <div className={styles.input_field}>
                <select
                  name='subject'
                  value={form.subject}
                  onChange={onChangeHandler}
                  required
                >
                  <option value='linkedin'>Linkedin</option>
                  <option value='referral'>Personal referral</option>
                </select>
                <span className={styles.check_icon}>
                  <FcCheckmark />
                </span>
              </div>
              <label>Message</label>
              <div className={styles.input_field}>
                <textarea
                  type='textarea'
                  name='message'
                  value={form.message}
                  onChange={onChangeHandler}
                  minLength={20}
                  maxLength={200}
                  required
                />
                <span className={styles.check_icon}>
                  <FcCheckmark />
                </span>
              </div>
              <input
                className={styles.submit_btn}
                type='submit'
                name='submit'
                value='Submit'
                disabled={isButtonDisabled}
                style={{
                  pointerEvents: isButtonDisabled ? 'none' : 'auto',
                }}
              />
              <div className={styles.message}>{validationMessage}</div>
            </motion.form>
          </GridItem>
          <GridItem>
            <div className={styles['direct-contact-container']}>
              <ul className={styles['contact-list']}>
                <li className={styles['list-item']}>
                  <IoIosPin />
                  <span className='contact-text place'>Stockholm, Sweden</span>
                </li>

                <li className={styles['list-item']}>
                  <HiPhone />
                  <span className={styles['contact-text phone']}>
                    <a href='tel:004672-3103233' title='Give me a call'>
                      {' '}
                      +46 (0) 72-3103233
                    </a>
                  </span>
                </li>

                <li className={styles['list-item']}>
                  <AiOutlineMail />
                  <span className='contact-text gmail'>
                    <a href='mailto:#' title='Send me an email'>
                      robertwagar@gmail.com
                    </a>
                  </span>
                </li>
              </ul>

              <hr />
              <ul className={styles['social-media-list']}>
                <li>
                  <Link
                    to='https://github.com/robonexx'
                    target='_blank'
                    className={styles['contact-icon']}
                  >
                    <RiGithubLine />
                  </Link>
                </li>
                <li>
                  <Link
                    to='https://github.com/robonexx'
                    className={styles['contact-icon']}
                  >
                    <RiCodepenLine />
                  </Link>
                </li>
              </ul>
              <hr />

              <div className='copyright'>
                &copy; - Robert Wägar
              </div>
            </div>
           
          </GridItem>
        </Grid>
      ) : (
        <>
          <motion.h2
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 2, ease: 'easeOut' }}
          >
            Thank you for visiting my portfolio!
          </motion.h2>
          <motion.p
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 2.2, ease: 'easeOut' }}
          >
            I appreciate your interest and would love to hear from you. Please
            feel free to reach out regarding any inquiries, opportunities, or
            feedback you may have. I'm always excited to connect with fellow
            developers, clients, and industry professionals.
          </motion.p>
          <motion.form
            className={styles.contact_form}
            noValidate
            ref={form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.4, ease: 'easeOut' }}
          >
            <label>Name</label>
            <div className={styles.input_field}>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={onChangeHandler}
                required
                minLength={3}
                maxLength={15}
              />
              <span className={styles.check_icon}>
                <FcCheckmark />
              </span>
            </div>
            <label>Email</label>
            <div className={styles.input_field}>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={onChangeHandler}
                required
              />
              <span className={styles.check_icon}>
                <FcCheckmark />
              </span>
            </div>
            <label>How did you hear about me?</label>
            <div className={styles.input_field}>
              <select
                name='subject'
                value={form.subject}
                onChange={onChangeHandler}
                required
              >
                <option value='linkedin'>Linkedin</option>
                <option value='referral'>Personal referral</option>
              </select>
              <span className={styles.check_icon}>
                <FcCheckmark />
              </span>
            </div>
            <label>Message</label>
            <div className={styles.input_field}>
              <textarea
                type='textarea'
                name='message'
                value={form.message}
                onChange={onChangeHandler}
                minLength={20}
                maxLength={200}
                required
              />
              <span className={styles.check_icon}>
                <FcCheckmark />
              </span>
            </div>
            <input
              className={styles.submit_btn}
              type='submit'
              name='submit'
              value='Submit'
              disabled={isButtonDisabled}
              style={{
                pointerEvents: isButtonDisabled ? 'none' : 'auto',
              }}
            />
            <div className={styles.message}>{validationMessage}</div>
          </motion.form>
        </>
      )}

      <Coffee />
    </div>
  );
};

export default Contact2;
