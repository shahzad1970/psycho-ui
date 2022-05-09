package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"
)

func main() {

	fileServer := http.FileServer(http.Dir("./static")) // New code
	http.Handle("/", fileServer)
	http.HandleFunc("/ui.js", allJs)

	// Handle index.html app request from static directory
	http.HandleFunc("/app/", serveApp)

	fmt.Printf("Starting server at port 8080\n")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}

// Serve index.html from static directory
func serveApp(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./static/index.html")
}

func allJs(w http.ResponseWriter, r *http.Request) {
	data := ""
	files, err := ioutil.ReadDir("./static")
	if err != nil {
		log.Fatal(err)
	}

	for _, file := range files {
		if !file.IsDir() && strings.HasSuffix(file.Name(), ".js") && file.Name() != "all.js" {
			b, err := ioutil.ReadFile("./static/" + file.Name()) // just pass the file name
			if err != nil {
				fmt.Print(err)
			}
			data += string(b) + "\n"
		}
	}
	w.Header().Set("Content-Type", "text/javascript")
	data = strings.ReplaceAll(data, "%", "%%")
	if err := os.WriteFile("./static/all.js", []byte(data), 0666); err != nil {
		log.Fatal(err)
	}
	fmt.Fprintf(w, data)
}
