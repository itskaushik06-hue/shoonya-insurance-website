import React, { useEffect, useMemo, useState } from "react";
import Lottie from "lottie-react";

type LottieAnimationData = {
  ip?: number;
  op?: number;
};

export default function HomeTransitionAnimation() {
  const [animationData, setAnimationData] = useState<LottieAnimationData | null>(
    null,
  );

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

  const initialSegment = useMemo(() => {
    if (!animationData?.op) {
      return undefined;
    }

    const startFrame = 24;
    const endFrame = Math.max(startFrame + 1, Math.floor(animationData.op) - 1);

    return [startFrame, endFrame] as [number, number];
  }, [animationData]);

  if (!animationData) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <img
          src="/videos/Animation1.svg"
          alt="Illustrated transition showing insurance made simple"
          className="h-full w-[118%] max-w-none object-contain object-center sm:w-full sm:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        initialSegment={initialSegment}
        aria-label="Animated transition illustrating Shoonya Insurance Brokers support journey"
        className="h-full w-[118%] max-w-none shrink-0 sm:w-full sm:scale-[1.02]"
      />
    </div>
  );
}
