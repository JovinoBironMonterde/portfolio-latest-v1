'use client'

import { useEffect, useState } from 'react'

export default function TypingLoop({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1200,
}) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    let timeout = null

    if (!isDeleting && text.length < currentWord.length) {
      // typing forward
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1))
      }, typingSpeed)
    } else if (!isDeleting && text.length === currentWord.length) {
      // pause at end of word
      timeout = setTimeout(() => setIsDeleting(true), delayBetween)
    } else if (isDeleting && text.length > 0) {
      // deleting
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1))
      }, deletingSpeed)
    } else if (isDeleting && text.length === 0) {
      // move to next word
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetween])

  return (
    <>
      {text}
      <span style={{ marginLeft: 4, animation: 'blink 1s infinite' }}>|</span>
      <style jsx>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </>
  )
}
