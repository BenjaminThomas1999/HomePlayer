# HomePlayer - Work in Progress
HomePlayer is an open source home media player and server - similar to Plex, but just for Music, Podcasts and Audiobooks. It is designed to be used with a Raspberry Pi and a touchscreen. 

HomePlayer comes in two parts, HomePlayer Client and HomePlayer Server. The idea is to have one HomePlayer Server in your home and several HomePlayer Clients in various rooms around your home. HomePlayer is designed to work with Home Assistant. HomePlayer can synchronise music playback across speaker groups in multiple rooms and can also support seperate concurrent streaming.

HomePlayer also supports multiple users within the Home.


## Installation

The following instructions are designed to work on Raspbian on a Raspberry Pi 4/5. 

1. Install the dependencies:
```
sudo apt-get install webkit2gtk4.1-devel python gtk3
```

## HomePlayer Client

<center><img width="494" height="747" alt="Screenshot from 2026-02-01 14-50-00" src="https://github.com/user-attachments/assets/ce6ed5e1-6463-4f63-a5a8-f61009156a7d" />
</center>

The HomePlayer frontend follows a similar design as Spotify. It uses HTML/CSS and JS to create an easily portable interface - initially designed for the Raspberry Pi and standard touchscreen. There are three main app sections:

1. Music.
2. Podcasts.
3. Audiobooks.

The HomePlayer Client communicates to the HomePlayer Server to receive library and music data. 

## HomePlayer Server

<img width="1536" height="1024" alt="Server Description" src="https://github.com/user-attachments/assets/84b6a429-4546-4e2b-8f33-d451f2feb7c5" />


The HomePlayer Server by default uses `/srv/HomePlayer`. Within the server's main directory are the following sub-directories:
```
.
└── Server
    ├── Library
    │   ├── Audiobooks
    │   │   ├── Audiobook_Library
    │   │   │   └── offline_files_go_here
    │   │   └── index.csv
    │   ├── Music
    │   │   ├── index.csv
    │   │   └── Music_Library
    │   │       └── offline_files_go_here
    │   ├── Podcast_Downloads
    │   │   └── offline_files_go_here
    │   └── Podcasts.toml
    └── System
        └── system_files_go_here
```
The HomePlayer Server is written in Rust. The user may place their Music and Audiobooks into the relevant sub-folders and the server will automatically index them and collect the appropriate meta-data if it's missing. The server is able to provide library information and stream audio to HomePlayer Clients.

The user may manually add downloaded Podcasts, but it is preferred for the user to add the RSS feed to the Podcasts.toml file.


