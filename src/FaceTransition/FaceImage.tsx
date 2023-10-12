import { Img, staticFile } from "remotion";

interface Props {
    face: string;
    size: number;
    index: number;
}

export const FaceImage: React.FC<Props> = ({ face, size, index }) => {
    // const { fps, durationInFrames, width, height } = useVideoConfig();
    // const frame = useCurrentFrame();

    return (
        <div
            style={{
                position: "relative",
                // background: 'blue',
                width: `${size}px`,
                height: `${size}px`,
                // border: '1px solid black',
                left: index % 2 == 1 ? `-${size}px` : "0",
            }}
        >
            <Img
                src={staticFile(`${face}-face.png`)}
                width={`${size}px`}
                height={`${size}px`}
            />
        </div>
    );
};
