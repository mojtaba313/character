'use client';
// pages/index.js
import React, { useState, useEffect } from 'react';
import { GlobalStyle, Container, Textarea, Button, Info, ToggleContainer, ToggleLabel, ToggleInput } from '../components/styles';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const storedText = localStorage.getItem('text');
    if (storedText) {
      setText(storedText);
    }
  }, []);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    localStorage.setItem('text', newText);
  };

  const handlePaste = (e) => {
    e.preventDefault();
    let pastedText = (e.clipboardData || window.clipboardData).getData('text');
    pastedText = pastedText.replace(/\s+/g, ' ').trim();
    setText(text + pastedText);
    localStorage.setItem('text', text + pastedText);
  };

  const handleToggleChange = () => {
    setIsRTL((prevIsRTL) => !prevIsRTL);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const wordCount = text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <Container>
      <Head>
        <title>شمارنده کلمات و کاراکترهای تکست اریا</title>
      </Head>
      <GlobalStyle />
      <ToggleContainer>
        <ToggleLabel>
          راست‌چین
          <ToggleInput type="checkbox" checked={isRTL} onChange={handleToggleChange} />
        </ToggleLabel>
      </ToggleContainer>
      <Textarea
        value={text}
        onChange={handleTextChange}
        onPaste={handlePaste}
        placeholder="اینجا تایپ کنید..."
        dir={isRTL ? 'rtl' : 'ltr'}
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
