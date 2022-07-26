import Image from "next/image";
import React from "react";
import story from "./story.module.scss";

const Story = () => {
  return (
    <div className={story.mainC}>
      <h2>The Power Of Mind 🧠</h2>
      <div className={story.holder}>
        <div className={story.textC}>
          <h4>PUSHING THE LIMIT</h4>
          <p>
            An accomplished endurance athlete, Goggins has completed over 60
            ultra-marathons, triathlons, and ultra-triathlons, setting new
            course records and regularly placing in the top five. He once held
            the Guinness World Record for pull-ups completing 4,030 in 17 hours,
            and he’s a sought after public speaker.
          </p>
        </div>
        <div className={story.banner}>
          <Image
            src="https://res.cloudinary.com/nuzem/image/upload/v1658825534/sb/david_goggins_about_si0vk7.png"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
