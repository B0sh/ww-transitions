import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import { FaceImage } from './FaceImage';

type Props = {
  faces: string[];
}

export const FaceTransition: React.FC<Props> = ({ faces }) => {
  const { fps, durationInFrames, width, height } = useVideoConfig();

  const frame = useCurrentFrame();
  const progress = spring({
    fps: fps,
    frame,
    durationInFrames: durationInFrames,
    config: {
      damping: 2,
      stiffness: 0.8,
    },
  });

  // Translate the purple screen from the left, transitioning in 1 second (30 frames at 30fps)
  const faceSize = height / faces.length;
  const translateX = interpolate(progress, [0, 1], [-1920 - faceSize * 2, 0]);

  return (
    <AbsoluteFill style={{backgroundColor: '#00FF00'}}>
      <div style={{
        top: 0,
        left: `-${width}px`,
        right: 0,
        bottom: 0,
        width: width + faceSize,
        height: "100%",
        display: "flex",
        flexDirection: "column",

        backgroundColor: '#FFFF00',
        transform: `translateX(${translateX}px)`,
      }}>

        <div style={{
          position: 'relative',
          left: `${width + faceSize}px`,
          height: `${height}px`
        }}>
          {faces.map((face, i) => {
            return <FaceImage key={i} face={face} size={faceSize} index={i}/>
          })}
        </div>

      </div>
    </AbsoluteFill>
  );
};
