import { useState, useEffect } from 'react';
import styles from './textToSpeech.module.scss';

// eslint-disable-next-line react/prop-types
const TextToSpeech = ({ text }) => {
  const [utterance, setUtterance] = useState(null);

  /* let voices = window.speechSynthesis.getVoices();

  utterance.voice = voices[5];
  utterance.volume = 1; // From 0 to 1
  utterance.rate = 1; // From 0.1 to 10
  utterance.pitch = 2; // From 0 to 2 */
  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;
    synth.speak(utterance);
    /* if (isPaused) {
      synth.resume();
    } else {
      synth.speak(utterance);
    } */
  };

  /*   const handlePause = () => {
    const synth = window.speechSynthesis;
    synth.pause();
  }; */

  const handleStop = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
  };

  return (
    <div className={styles.text_to_speech}>
      <button className={styles.btn} onClick={handlePlay}>
        Play
      </button>
      {/* <button className={styles.btn} onClick={handlePause}>
        Pause
      </button> */}
      <button className={styles.btn} onClick={handleStop}>
        Stop
      </button>
    </div>
  );
};

export default TextToSpeech;
