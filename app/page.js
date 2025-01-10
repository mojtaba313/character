'use client'
// pages/index.js
import React, { useState } from 'react';
import { GlobalStyle, Container, Textarea, Button, Info } from '../components/styles';
import Head from 'next/head'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
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

