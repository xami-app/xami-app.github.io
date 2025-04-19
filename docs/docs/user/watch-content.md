# Watching Content

Logic on how to watch content differs based on the type of content you are trying to consume.
For example, video files are handled differently than audio files.

## Video

Watching video is pretty straightforward. The media player supports a wide range of video formats, including but not limited to `.mp4`, `.mkv`, `.avi`, `.mov`, and `.webm`. To begin playback:

1. **Navigate to the Video Library**
   - Use the left sidebar to access the "Videos" section.
   - Videos are automatically sorted by date added, but you can also sort by title, duration, or resolution.

2. **Select a Video**
   - Click on the thumbnail or title to open the video player.
   - You’ll be presented with metadata like duration, resolution, codec info, and subtitle availability.

3. **Playback Controls**
   - Use the bottom control panel to:
     - Play/Pause
     - Seek (rewind/fast forward)
     - Adjust volume
     - Toggle full-screen mode
     - Enable picture-in-picture
     - Open subtitle/captions menu

4. **Subtitles and Captions**
   - You can load external subtitle files (`.srt`, `.vtt`, etc.) or choose from available embedded options.
   - Adjust font size, position, and color in Settings > Subtitle Preferences.

5. **Advanced Features**
   - **Frame-by-frame stepping**: Ideal for reviewing action scenes or analyzing footage.
   - **Playback speed control**: Range from 0.25x to 2.0x.
   - **Looping**: Loop entire video or custom sections.
   - **Streaming support**: Supports direct playback from URLs and DLNA servers.
   - **Casting**: Cast to supported devices via Chromecast or AirPlay.

## Audio

Audio playback follows a similar structure but emphasizes playlists, visualizers, and metadata.

1. **Library Access**
   - Go to the "Music" tab to view audio files organized by album, artist, or genre.
   - Audio files supported include `.mp3`, `.flac`, `.ogg`, `.wav`, and `.aac`.

2. **Playlists**
   - Users can create custom playlists.
   - Drag and drop to reorder songs.
   - Shuffle and repeat modes available.

3. **Playback UI**
   - A minimalistic player bar remains accessible at the bottom at all times.
   - Expand the player to view album art, track metadata, and visualizations.

4. **Equalizer and Effects**
   - 10-band graphic equalizer with presets like "Rock", "Jazz", "Classical".
   - Additional audio effects include reverb, bass boost, and spatial audio.

5. **Background Play**
   - When minimized, audio continues to play.
   - Integration with media keys and notification controls.

## Streaming

1. **Supported Sources**
   - HTTP/HTTPS
   - RTMP
   - HLS (m3u8 playlists)
   - DASH

2. **Adding a Stream**
   - Open the "Streams" tab and click "Add Stream".
   - Paste the URL and press "Play".

3. **Adaptive Streaming**
   - Automatically adjusts resolution based on network bandwidth.
   - Option to lock preferred resolution.

4. **Live Chat Overlay** (Experimental)
   - For live streams, enable chat overlay to display live messages in a sidebar.

## Controls Overview

| Control          | Shortcut | Description                          |
|------------------|----------|--------------------------------------|
| Play/Pause       | Space    | Toggles playback                     |
| Volume Up/Down   | Up/Down  | Adjusts volume                       |
| Seek Forward     | Right    | Skips forward 10 seconds             |
| Seek Backward    | Left     | Skips back 10 seconds                |
| Full Screen      | F        | Toggles fullscreen mode              |
| Mute             | M        | Mutes/unmutes audio                  |
| Subtitles        | S        | Opens subtitle settings              |
| Speed Increase   | .        | Increases playback speed             |
| Speed Decrease   | ,        | Decreases playback speed             |
| Toggle Loop      | L        | Loops current media or section       |

## Settings

Settings can be accessed via the gear icon in the top right corner of the media player.

- **Playback**: Default speed, loop mode, start from last position
- **Video**: Hardware acceleration, aspect ratio lock, deinterlacing
- **Audio**: Default output device, normalize volume, crossfade duration
- **Subtitles**: Default language, appearance, sync offset
- **Network**: Proxy settings, cache size, buffer management

## Troubleshooting

- **No Audio**: Check system volume, output device, and mute toggle.
- **Video Lag/Stutter**: Disable hardware acceleration or lower playback resolution.
- **Unsupported Format**: Ensure the necessary codecs are installed.
- **Subtitles Not Showing**: Confirm subtitle file is loaded and not out of sync.
- **Stream Buffering**: Increase buffer size or reduce resolution.

## Keyboard Accessibility

All features of the player are fully keyboard-accessible. Tab through buttons, use arrow keys for sliders, and shortcuts for rapid control.

## Mobile Support

The player UI adapts to mobile and tablet screens:
- Tap controls instead of hover
- Swipe gestures for seek and volume
- Persistent mini-player for multitasking

## Developer Tools

For power users and developers:

- Enable developer overlay for inspecting media playback details
- Real-time logs (codec info, buffer state, dropped frames)
- JSON-based export of session metadata for diagnostics

## Conclusion

The media player is built to provide a rich, flexible, and customizable experience across all types of content. Whether you're binge-watching a series, reviewing raw footage, or vibing to music, the system adapts to your needs with powerful tools and intuitive design.