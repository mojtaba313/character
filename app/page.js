'use client'
// pages/index.js
import React, { useState, useEffect } from 'react';
import { GlobalStyle, Container, Textarea, Button, Info } from '../components/styles';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  // Load stored text from localStorage on component mount
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset icon after 2 seconds
    });
  };

  const wordCount = text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <Container>
      <Head>
        <title>Textarea Word & Char Counter</title>
      </Head>
      <GlobalStyle />
      <Textarea 
        value={text} 
        onChange={handleTextChange} 
        placeholder="Type here..." 
      />
      <Info>
        Word Count: {wordCount} | Character Count: {charCount}
      </Info>
      <Button onClick={copyToClipboard}>
        {copied ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          "Copy Text"
        )}
      </Button>
    </Container>
  );
}
