import {Composition} from 'remotion';
import { FaceTransition } from './FaceTransition/FaceTransition';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MyVideo"
      component={FaceTransition}
      durationInFrames={60}
      fps={30}
      width={1920}
      height={1080}
			defaultProps={{
				faces: [
					'B0sh',
					'Elwyn',
					'Farynheight',
					'B0sh',
					'Elwyn',
				]
			}}
    />
  );
};