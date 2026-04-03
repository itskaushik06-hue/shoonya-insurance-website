import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function HomeTransitionAnimation() {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetch("/videos/Animation1.json")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setAnimationData(data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setAnimationData(null);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!animationData) {
    return (
      <img
        src="/videos/Animation1.svg"
        alt="Illustrated transition showing insurance made simple"
        className="h-full w-full scale-[1.02] object-contain"
      />
    );
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      aria-label="Animated transition illustrating Shoonya Insurance Brokers support journey"
      className="h-full w-full scale-[1.02]"
    />
  );
}
