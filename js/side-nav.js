var currentContent = null;
var numContentsShown = 0;

function showContent(contentID) {
    var content = document.getElementById(contentID);

    // Menyembunyikan konten saat ini jika jumlah konten yang ditampilkan sudah mencapai dua
    if (numContentsShown >= 2 && currentContent != null) {
        currentContent.classList.remove('showku');
        numContentsShown--;

        // Menghapus kelas show dari konten yang tidak aktif
        var contents = document.querySelectorAll('.content');
        for (var i = 0; i < contents.length; i++) {
            if (contents[i] !== content && contents[i] !== currentContent) {
                contents[i].classList.remove('showku');
                numContentsShown--;
            }
        }
    }

    // Menampilkan konten yang baru
    content.classList.add('showku');

    // Menghapus kelas showku dari konten yang tidak aktif
    var contents = document.querySelectorAll('.content');
    for (var i = 0; i < contents.length; i++) {
        if (contents[i] !== content) {
            contents[i].classList.remove('showku');
        }
    }

    currentContent = content;
    numContentsShown++;
}

// Menampilkan konten pertama saat halaman dimuat
window.onload = function() {
    var defaultContent = document.getElementById('content1');
    defaultContent.classList.add('showku');
    currentContent = defaultContent;
    numContentsShown++;
};
