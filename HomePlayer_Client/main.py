import gi

gi.require_version("Gtk", "3.0")
gi.require_version("WebKit2", "4.1")

from gi.repository import Gtk, WebKit2

class App(Gtk.Window):
    def __init__(self):
        super().__init__(title="HomePlayer Client")
        self.set_default_size(480, 800)
        # ~ self.fullscreen()

        webview = WebKit2.WebView()
        webview.load_uri("file:///home/ben/Development/HomePlayer/HomePlayer Client/System/main.html")

        self.add(webview)
        self.connect("destroy", Gtk.main_quit)


if __name__ == "__main__":
    win = App()
    win.show_all()
    Gtk.main()
