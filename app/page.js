'use client'
// pages/index.js
import React, { useState, useEffect, useCallback } from 'react';
import { GlobalStyle, Container, Textarea, Button, Info } from '../components/styles';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';

export default function Home() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  // بارگذاری متن ذخیره شده از localStorage هنگام بارگذاری کامپوننت
  useEffect(() => {
    const storedText = localStorage.getItem('text');
    if (storedText) {
      setText(storedText);
    }
  }, []);

  // استفاده از استفاده از ورودی آهنگ با استفاده از lodash
  const handleTextChange = useCallback(_.throttle((e) => {
    const newText = e.target.value;
    setText(newText);
    localStorage.setItem('text', newText);
  }, 300), []);

  // کپی کردن متن به کلیپ بورد
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // بازنشانی آیکون بعد از ۲ ثانیه
    });
  };

  // محاسبه تعداد کلمات و کاراکترهای متن
  const wordCount = text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <Container>
      <Head>
        <title>شمارنده کلمات و کاراکترهای تکست اریا</title>
      </Head>
      <GlobalStyle />
      <Textarea 
        value={text} 
        onChange={handleTextChange} 
        placeholder="اینجا تایپ کنید..." 
      />
      <Info>
        تعداد کلمات: {wordCount} | تعداد کاراکترها: {charCount}
      </Info>
      <Button onClick={copyToClipboard}>
        {copied ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          "کپی کردن متن"
        )}
      </Button>
    </Container>
  );
}
