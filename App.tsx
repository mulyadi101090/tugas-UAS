import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';

const stories = [
  { id: '1', title: 'KISAH ABU NAWAS', content: <Text>Abu Nawas adalah nama panggilan untuk Abu al-Hasan Ali ibn Hizam al-Qurashi, seorang penyair Arab yang hidup pada abad ke-8 Masehi. Dia dikenal sebagai salah satu penyair terkenal dalam sastra Arab klasik 
  dan sering dianggap sebagai tokoh humor dan kebijaksanaan dalam budaya Arab.

  Abu Nawas terkenal karena karyanya yang penuh dengan humor, kebijaksanaan, dan kritik sosial. Meskipun dia hidup pada masa kekhalifahan Abbasiyah, banyak ceritanya yang bersifat anekdot dan dapat dianggap sebagai fiksi. Namun, figur Abu Nawas telah menjadi 
  bagian dari warisan sastra Arab dan terus diingat dalam berbagai kisah dan legenda. Cerita-cerita tentang kejenakaan dan kebijaksanaan Abu Nawas sering diwariskan secara lisan dan tertulis dalam berbagai bentuk di seluruh dunia Arab.</Text> },
  { id: '2', title: '1.Abu Nawas Dan Pohon Anggur', content: <Text> 'Suatu hari, Khalifah Harun Al-Rasyid ingin menguji kecerdikan Abu Nawas. Ia memanggil Abu Nawas ke istananya.

  “Abu Nawas, saya ingin kamu membawa saya ke kebun anggur yang paling indah di Baghdad dalam waktu tiga hari. Jika kamu gagal, kamu akan dihukum!”
  
  Abu Nawas bingung karena musim dingin sedang tiba, dan semua kebun anggur pasti sudah kering dan tidak ada buahnya. Bagaimana mungkin ada kebun anggur yang indah di musim ini? Namun, dengan cepat ia menciptakan sebuah ide.
  
  Tiga hari kemudian, Abu Nawas kembali ke istana dengan membawa sebuah cermin kecil di tangannya.
  
  Khalifah Harun Al-Rasyid bertanya, “Abu Nawas, di mana kebun anggur yang kamu janjikan?”
  
  “Tuanku, Hamba mohon Anda untuk melihat ke dalam cermin ini!” jawab Abu Nawas.
  
  Khalifah Harun Al-Rasyid melihat wajahnya sendiri di dalam cermin itu.
  
  “Ini apa, Abu Nawas?” tanyanya dengan marah.
  
  “Tuan Yang Mulia, kebun anggur yang paling indah adalah kebun yang ada di dalam hati seorang pemimpin yang adil. Bila hati Tuan penuh dengan kebaikan, maka kebun anggur di dalamnya pasti akan indah dan subur,” jawab Abu Nawas.
  
  Khalifah Harun Al-Rasyid tertawa mendengar jawaban Abu Nawas. Ia memuji kecerdikan Abu Nawas dan membebaskannya dari hukuman, bahkan memberinya hadiah.
  '

 </Text> },
  { id: '3', title: '2.Abu Nawas dan Ikan Ajaib', content: <Text> 'Pada suatu hari, Khalifah Harun Al-Rasyid memutuskan untuk mengadakan perlombaan memancing. Siapa saja yang bisa menangkap ikan dengan warna paling aneh akan diberikan hadiah berupa emas sebanyak-banyaknya.

  Banyak orang berdatangan untuk mengikuti perlombaan tersebut, termasuk Abu Nawas. Ketika banyak orang sibuk memancing di sungai, kolam, dan danau, Abu Nawas justru pergi ke pasar.
  
  Ia membeli beberapa ekor ikan dan bumbu-bumbu dapur, lalu kembali ke rumahnya. Di rumah, ia merebus ikan tersebut dan menambahkan bumbu hingga warnanya berubah menjadi ungu terang.
  
  Keesokan harinya, saat Khalifah Harun Al-Rasyid dan para peserta lainnya berkumpul, semua orang memperlihatkan ikan yang mereka tangkap.
  
  Ada ikan dengan corak unik, ada ikan dengan ukuran besar, tetapi tak ada satu pun yang memiliki warna seaneh ikan milik Abu Nawas.
  
  Khalifah Harun Al-Rasyid terkejut melihat ikan berwarna ungu yang dibawa Abu Nawas. “Dari manakah kau mendapatkan ikan ini?” tanya Khalifah Harun Al-Rasyid dengan heran.
  
  “Ah, itu rahasia, Yang Mulia,” jawab Abu Nawas sambil tersenyum misterius.
  
  Khalifah Harun Al-Rasyid yang terkesan dengan keunikan ikan tersebut, memutuskan untuk memberikan hadiah emas kepada Abu Nawas. Setelah menerima hadiah, Abu Nawas berbisik kepada salah seorang temannya, “Rahasia sesungguhnya adalah di dapur.”
  '</Text> },

{ id: '4', title: '3.Abu Nawas dan Kontes Menyanyi Burung', content: <Text>Suatu hari, Khalifah Harun Al-Rasyid mengadakan kontes menyanyi burung. Khalifah Harun Al-Rasyid ingin mengetahui siapa yang memiliki burung dengan suara merdu terindah di seluruh kerajaan Baghdad.

Para bangsawan dan pedagang kaya datang dari seluruh penjuru kerajaan dengan membawa burung-burung terindah mereka.

Namun, Abu Nawas, yang tidak memiliki burung yang indah dan merdu, memutuskan untuk ikut serta dalam kontes ini dengan membawa seekor burung gagak.

Orang-orang terkejut dan tertawa melihat Abu Nawas datang dengan burung gagak, yang dikenal tidak memiliki suara yang merdu.

Kontes pun dimulai. Satu per satu, burung-burung yang indah dan eksotis melantunkan suara mereka yang merdu dan harmonis. Kemudian tiba giliran Abu Nawas dan burung gagaknya. Burung gagak itu hanya bisa mengeluarkan suara “kraa, kraa” yang keras dan tidak merdu.

Namun, Abu Nawas dengan percaya diri memperkenalkan burung gagaknya dengan puisi indah yang merdu. Dia menggambarkan burung gagak sebagai burung yang jujur, setia, dan kuat.

Berbeda dengan burung-burung cantik lainnya yang mungkin tidak memiliki keberanian dan kekuatan. Abu Nawas menyanyikan pujian untuk burung gagak dengan begitu indah sehingga seluruh ruangan terdiam, terpesona oleh kata-katanya.

Meskipun burung gagak Abu Nawas tidak bisa menyanyi dengan indah, kata-kata Abu Nawas membuat semua orang terkesan.

Khalifah Harun Al-Rasyid terkesan dengan kelihaian Abu Nawas dalam merangkai kata dan menyampaikan pesan yang mendalam tentang keindahan yang sejati.

Ia memutuskan untuk memberinya hadiah khusus sebagai penghargaan atas kecerdasan dan kreativitasnya.

</Text> },
{ id: '4', title: '4.Abu Nawas dan Sayembara Raja', content: <Text> Pada suatu hari, Khalifah Harun Al-Rasyid mengadakan sayembara. Dia menaruh sebuah labu yang besar di tengah-tengah istananya dan meminta para hadirin untuk mengisinya dengan apa pun yang mereka inginkan.

Yang penting, labu tersebut harus terisi penuh. Para hadirin bingung, karena ukuran labu tersebut sangat besar.

Seorang demi seorang mencoba. Ada yang mencoba mengisi dengan beras, ada juga yang dengan kain. Namun, semuanya gagal karena tidak cukup untuk mengisi labu yang sangat besar tersebut. Khalifah Harun Al-Rasyid mulai merasa tidak sabar dan hampir membatalkan sayembara tersebut.

Tiba-tiba, Abu Nawas muncul dengan langkah gembira. Dengan santai, dia mendekati labu tersebut sambil membawa selembar kertas kecil.

Semua orang di istana tersebut bertanya-tanya, bagaimana mungkin selembar kertas kecil bisa mengisi labu yang begitu besar?

Abu Nawas kemudian melipat kertas tersebut menjadi bentuk burung, dan diletakannya di dalam labu. “Sudah terisi penuh, Tuan!” kata Abu Nawas dengan senyum cerdiknya.

Semua orang di istana itu terheran-heran. Mereka memprotes, mengatakan bahwa labu itu jelas-jelas masih kosong. Namun, Abu Nawas dengan tenang menjelaskan, “Labu ini sekarang sudah terisi penuh dengan kertas burung, udara di dalam labu, dan kekaguman kalian semua!”

Khalifah Harun Al-Rasyid pun tertawa terbahak-bahak. Dia mengakui kecerdasan Abu Nawas dan memberinya hadiah yang sangat besar. Kembali, Abu Nawas membuktikan kecerdasannya yang tiada tara.


</Text> },

{ id: '5', title: '5.Abu Nawas dan Khalifah Harun Al-Rasyid', content: <Text> Suatu hari, Khalifah Harun Al-Rasyid ingin menguji kecerdikan Abu Nawas. Khalifah Harun Al-Rasyid mengundang Abu Nawas ke istana dan memberikan kepadanya sebuah tantangan.

“Abu Nawas,” katanya. “Aku ingin kamu membawa sesuatu yang bisa membuat aku senang saat aku sedih, dan membuat aku sedih saat aku senang.”

Abu Nawas menanggapi tantangan ini dengan tenang. Dia berpikir sejenak, lalu pergi dari istana untuk mempersiapkan jawabannya. Keesokan harinya, Abu Nawas kembali ke istana dengan membawa sebuah bingkai cermin kecil.

Khalifah Harun Al-Rasyid bingung melihat benda yang dibawa Abu Nawas. “Apa ini, Abu Nawas?” tanyanya.

“Inilah jawabannya, Tuanku,” jawab Abu Nawas sambil menyerahkan cermin kecil itu kepada Khalifah Harun Al-Rasyid.

Khalifah Harun Al-Rasyid mengambil cermin itu dan melihat wajahnya sendiri di dalamnya.

Abu Nawas lalu menjelaskan, “Ketika Tuanku merasa sedih, lihatlah ke dalam cermin ini, dan Tuanku akan melihat betapa berharganya diri Tuanku, yang akan membuat Tuanku senang,”katanya.

“Namun, ketika Tuanku merasa senang, lihatlah lagi ke dalam cermin ini, dan Tuanku akan disadarkan bahwa, tak peduli seberapa bahagia Tuanku, akhirnya Tuanku tetap manusia biasa,”kata Abu Nawas lagi.

Khalifah Harun Al-Rasyid sangat terkesan dengan kecerdikan Abu Nawas. Dia menyadari bahwa Abu Nawas telah berhasil memenuhi tantangannya dengan cara yang sangat cerdas dan unik.

Khalifah Harun Al-Rasyid lalu memberikan hadiah kepada Abu Nawas sebagai tanda penghargaan atas kecerdikan dan kearifannya.


</Text> },

{ id: '6', title: '6.Abu Nawas dan Timbangan Emas', content: <Text> Pada suatu hari, seorang pedagang kaya namun kikir datang ke kota Baghdad. Ia membawa sejumlah besar emas untuk ditukar dengan barang-barang lainnya.

Pedagang itu dikenal sebagai orang yang selalu mencari keuntungan sebanyak-banyaknya dan tidak pernah mempercayai siapa pun. Pedagang itu meminta Abu Nawas untuk membantunya menemukan timbangan yang dapat diandalkan untuk menimbang emasnya.

Ia tahu Abu Nawas adalah orang yang cerdik dan memiliki banyak koneksi di kota. Tetapi ia juga mendengar cerita tentang betapa liciknya Abu Nawas, jadi ia merasa waspada.

Abu Nawas menerima tugas itu dengan senang hati. Ia membawa pedagang itu ke sebuah toko alat timbang dan meminta pemilik toko untuk menunjukkan timbangan terbaiknya.

Setelah memeriksa berbagai timbangan, pedagang itu tetap tidak puas. Ia curiga bahwa semua timbangan itu telah disabotase untuk menipunya.

Melihat kekhawatiran pedagang itu, Abu Nawas mendapatkan ide jenius. Ia menyuruh pedagang itu menimbang batu seberat satu pon dengan salah satu timbangan. Kemudian, ia menyarankan agar batu tersebut dibawa ke toko emas dan ditimbang kembali dengan emas seberat satu pon.

Pedagang itu melakukan apa yang disarankan Abu Nawas. Hasilnya, berat batu dan emas ternyata sama, sehingga menunjukkan bahwa timbangan di toko alat timbang adalah akurat.

Pedagang itu akhirnya puas dan memberi Abu Nawas hadiah untuk bantuannya. Namun, ia tidak pernah menyadari bahwa itu semua adalah akal cerdik Abu Nawas untuk membuatnya percaya pada timbangan di toko.


</Text> },

{ id: '7', title: '7.Kisah Abu Nawas dan Ikan Mas', content: <Text>Pada suatu hari, khalifah Harun Al-Rashid ingin makan ikan mas yang segar. Ia memanggil Abu Nawas dan berkata, “Abu Nawas, aku ingin kau menangkap ikan mas untukku. Ingat, ikan itu harus segar, dan aku ingin memakannya besok.”

Abu Nawas yang dikenal cerdik punya rencana. Ia tahu bahwa menangkap ikan mas bisa memakan waktu yang lama dan tidak ada jaminan ia akan menangkapnya. Jadi, ia pergi ke pasar dan membeli ikan mas segar yang baru ditangkap oleh nelayan.

Keesokan harinya, Abu Nawas pergi ke sungai bersama dengan pembantu khalifah. Ia masuk ke dalam air sambil membawa ikan mas yang telah dibelinya, dan pura-pura menangkapnya di depan pembantu khalifah tersebut.

Pembantu khalifah tersebut sangat terkesan dan memberitahu khalifah bahwa Abu Nawas berhasil menangkap ikan mas dalam waktu singkat. Khalifah pun senang dan memuji keahlian Abu Nawas.

Tetapi ketika Abu Nawas hendak pergi, khalifah berkata, “Abu Nawas, aku tahu apa yang kau lakukan. Aku melihat bahwa ikan mas itu tidak bergerak ketika kau ‘menangkapnya’. Kau cerdik, tetapi ingat, jangan pernah mencoba menipu aku lagi.”

Abu Nawas hanya tersenyum dan memberi hormat pada khalifah, lalu pergi dengan hati yang gembira karena ia berhasil menyelesaikan tugas dengan cara yang cerdik.


</Text> },
{ id: '8', title: '8.Memindahkakn Istana Raja', content: <Text> Baginda Raja baru saja membaca kitab tentang kehebatan Raja Sulaiman yang mampu memerintahkan, para in memindahkan singgasana Ratu Bilqis di dekat istananya. Baginda tiba-tiba merasa tertarik. Hatinya mulai tergelitik untuk melaku’ kan hal yang sama. Mendadak beliau ingin istananya dipindahkan ke atas gunung agar bisa lebih leluasa menikmati pemandangan di sekitar. Dan bukankah hal itu tidak mustahil bisa dilakukan karena ada Abu Nawas yang amat cerdik di negerinya.

Tanpa membuang waktu Abu Nawas segera dipanggil untuk menghadap Baginda Raja Harun Al Rasyid. Setelah Abu Nawas dihadapkan. Raja pun berkata kepada Abu Nawas.

“Abu Nawas engkau harus memindahkan istanaku ke atas gunung agar aku lebih leluasa melihat negeriku?” kata Baginda sambil melirik reaksi Abu Nawas.

Abu Nawas tidak langsung menjawab. Ia berpikir sejenak hingga keningnya berkerut. Tldak mungkin menolak perintah Baginda kecuali kalau memang ingin dihukum. Akhirnya Abu Nawas terpaksa menyanggupi proyek raksasa itu. Ada satu lagi, permintaan dati Baginda, pekerjaan itu harus diselesaikan hanya dalam waktu sebutan. Abu Nawas pulang dengan hati masgul.

Setiap malam ia hanya berteman dengan rembulan dan bintang-bintang. Hari-hari ditewatinya dengan kegundahan. Tak ada hari yang lebih berat dalam hidup Abu Nawas kecuali hari-hari ini. Tetapi pada hari kesembilan ia tidak lagi merasa gundah gulana.

Keesokan harinya Abu Nawas menuju istana. ia menghadap Baginda untuk membahas pemindahan istana Dengan senang hati Baginda akan mendengarkan, apa yang diinginkan Abu Nawas.  “Ampun Tuanku, hamba datang ke sini hanya untuk mengajukan usul untuk memperlancar pekerjaan hamba nanti,” kata Abu Nawas.

Apa usul itu?” tanya Baginda. Hamba akan memindahkan istana Paduka yang mulia tepat pada Hari Raya Idul Qurban yang kebetulan hanya kurang dua puluh hari lagi,” kata Abu Nawas.

“Kalau hanya itu usulmu, baiklah,” kata Baginda

“Satu lagi Baginda, ”Abu Nawas menambahkan.

Apa lagi?” tanya Baginda.

“Hamba mohon Baginda menyembelih sepuluh ekor sapi yang gemuk untuk dibagikan langsung kepada para fakir miskin.” kata Abu Nawas.

“Usulmu kuterima,” kata Baginda menyetujui.

Abu Nawas pulang dengan perasaan riang gembira. Kini tidak ada lagi yang perlu dikhawatirkan. Toh nanti bila waktunya sudah tiba, ia pasti akan dengan mudah memindahkan istana Baginda Raja. Jangankan hanya memindahkan ke puncak gunung, ke dasar samudera pun Abu Nawas sanggup.

Desas-desus mulai tersebar ke seluruh pelosok negeri. Hampir semua orang harap-harap cemas. Tetapi sebagian besar rakyat merasa yakin atas kemampuan Abu Nawas. Karena selama ini Abu Nawas belum pemah gagal melaksanakan tugas-tugas aneh yang dibebankan di atas pundaknya. Namun ada beberapa orang yang meragukan keberhasilan Abu Nawas kali ini.

Saat-saat yang dinanti-nantikan tiba. Rakyat berbondongbondong menuju lapangan untuk melakukan shalat Hari Raya Idul Adha. Dan seusai shalat, sepuluh sapi sumbangan Baginda Raja disembelih lalu dimasak kemudian segera dibagikan kepada fakir miskin. Kini giliran Abu Nawas yang harus melaksanakan tugas berat itu.

Abu Nawas berjalan menuju istana diikuti oleh rakyat. Sesampai di depan istana Abu Nawas bertanya kepada Baginda Raja.

“Ampun Tuanku yang mulia, apakah istana sudah tidak ada orangnya lagi?” tanya Abu Nawas.

“TIdak ada,” jawab Baginda Raja singkat.

Kemudian Abu Nawas berjalan beberapa iangkah mendekati istana. la berdiri sambii memandangi istana. Abu Nawas berdiri mematung seolaholah ada yang ditunggu. Benar. Baginda Raja akhirnya tidak sabar. ‘

“Abu Nawas, mengapa engkau belum Juga mengangkat istana. ku?” tanya Baginda Raja. .

“Hamba sudah siap sejak tadi Baginda” kata Abu Nawas.

”Apa maksudmu engkau sudah siap sejak tadi? Kalau engkau sudah siap. Lalu apa yang engkau tunggu?” tanya Baginda masih diliputi perasaan heran.

“Hamba menunggu istana Paduka yang mulia diangkat oleh seluruh rakyat yang hadir untuk diletakkan di atas pundak hamba. Setelah itu hamba tentu akan memindahkan istana Paduka yang mulia ke atas gunung sesuai dengan perintah Paduka.” kata Abu Nawas.

Baginda Raja Harun Al Rasyid terpana. Beliau tidak menyangka Abu Nawas masih bisa terhindar dari hukumannya. 
</Text> },
{ id: '9', title:'9.Istana Hancur Karena Lalat', content: <Text>pada suatu hari Abu Nawas terlihat murung. ia hanya tertunduk lesu mendengarkan penuturan istrinya yang mengatakan kalau beberapa pekerja kerajaan atas titah Raja Harun membongkar rumahnya. Raja berdalih bahwa itu dilakukan karena bermimpi kalau di bawah rumahnya terpendam emas dan permata yang tak ternilai harganya.

Namun. setelah mereka terus menerus menggali, ternyata emas dan permata tidak Juga ditemukan. Parahnya, sang Raja juga tidak mau meminta maaf dan mengganti rugi sedikitpun kepada Abu Nawas. Karena Itulah Abu Nawas sakit hati dan memendam rasa dendam kepada perusak rumahnya. Lama Abu Nawas memeras otak, namun belum Juga ia menemukan muslihat untuk membalas perbuatan baginda. Makanan yang dihidangkan istrinya pun tidak dimakan karena nafsu makannya telah lenyap. Keesokan harinya Abu Nawas melihat banyak Ialat-Ialat mulai menyerbu makanannya yang sudah mulai basi. Begitu melihat lalat-Ialat itu berterbangan. Abu Nawas tiba-tiba saja tertawa riang seolah mendapatkan ide. “Tolong amblikan kain penutup untuk makananku dan sebatang besi,” kataAbu Nawas kepada istrinya.

Dengan wajah berseri-seri, Abu Nawas berangkat menuju istana. Setiba di istana, Abu Nawas membungkuk memberi hormat kepada Raja Harun. Raja Harun terkejut atas kedatangan Abu Nawas Di hadapan para menterinya, Raja Harun mempersilahkan Abu Nawas untuk menghadap.

“Ampun Tuanku, hamba menghadap Tuanku Baginda hanya untuk mengadukan periakuan tamu-tamu yang tidak diundang. Mereka memasuki rumah hamba tanpa izin dan berani memakan makanan hamba,” laporAbu Nawas. “Siapakah tamu-tamu tidak diundang itu wahai Abu Nawas?” ujar Baginda dengan bijaksana.

Lalat-Ialat ini Tuanku,” kata Abu Nawas sambil membuka penutup piringnya. “Kepada siapa lagi kalau bukan kepada Paduka junjungan hamba, hamba mengadukan perlakuan yang tidak adil Ini” ujar Abu Nawas sekali lagi Lalu, keadilan yang bagaimana yang engkau inginkan dan’ku?” tanya Raja Harun penasaran.

Hamba hanya menginginkan izin tertulis dari Baginda sendiri agar hamba bisa dengan ieluasa menghukum lalat-lalat yang nakal itu,” kataAbu Nawas memulai muslihatnya.

Akhirnya Raja Harun dengan terpaksa membuat surat izin yang isinya memperkenankan Abu Nawas memukul Ialat-lalat itu dimanapun mereka hinggap. Setelah mendapat izin tertulis itu Abu Nawas mulai mengusir laiat-lalat di piringnya hingga mereka terbang dan hinggap di sana sini. Dmgan menggunakan tongkat besi yang dibawa dari rumah, Abu Nawas mengejar dan memukurl lalatlaiat itu. Ketika hinggap di kaca, Abu Nawas dengan tenang dan leluasa memukul kaca itu hingga pecah. Kemudian vas bunga nan indah milik sang Raja juga ikut terkena pukul dan pecah. Akhirnya hanya dalam beberapa menit saja seluruh perabot istana hancur berkeping-keping. Raja Harun tidak bisa berbuat apa-apa kecuali menyadari kekeliruannya yang telah dilakukan terhadap Abu Nawas dan keluarganya.

Setelah merasa puas, Abu Nawas mohon diri. Barang-barang kesayangan Raja Harun banyak yang hancur. Bukan cuma itu saja raja juga menanggung rasa malu. Kini dia sadar betapa kelirunya; telah berbuat semena-mena kepada Abu Nawas.</Text> },

{ id: '10', title: '10.Membuat Manusia Bertelur', content: <Text>sudah bertahun-tahun Baginda Raja Harun AI Rasyid ingin mengalahkan Abu Nawas. Namun perangkap-perangkap yang selama ini dibuat, semua bisa diatasi dengan cara-cara yang cemerlang oleh Abu Nawas. Baginda Raja tidak putus asa. Masih ada puluhan jaring muslihat yang telah disiapkannyauntuk menjerat dan menghukum Abu Nawas. Baginda Raja beserta“ para menteri sering mengunjungi tempat pemandian air hangat yang hanya dikunjungi para pangeran, bangsaWan dan orang-orang terkenal. Suatu sore yang cerah ketika Baginda Raja beserta para menterinya berendam di kolam, beliau ‘ berkata kepada para menterinya.

“Aku punya akal untuk menjebak Abu Nawas,” kata Baginda Raja dengan wajah yang ceria. ‘ “Apakah itu wahai Paduka yang mulia?” tanya salah seorang menteri.

“Kalian tak usah tahu dulu.  Aku hanya ingin kalian datang lebih dini besok sore. Jangan lupa . . datanglah besok sebelum Abu Nawas datang karena aku akan  mengundangnya untuk mandi bersama-sama klta.” kata Baginda Raja memberi pengarahan.

Baginda Raja memang sengaja tidak menyebutkan tipuan apa yang akan digelar besok. Abu Nawas diundang untuk mandi bersama Baginda Raja dan para menteri di pemandian air hangat yang terkenal itu. Sapen; yang telah direncanakan. Baginda Raja dan para meriteri sudah datang lebih dahulu. Baginda membawa sembilan belas butir telur ayam. Delapan belas butir dibagikan kepada para menterinya. Satu butir untuk dirinya sendiri. Kemudian Baginda memberi pengarahan singkat tentang apa yang telah direncanakan untuk menjebakAbu Nawas Ketika Abu Nawas datang, Baginda Raja beserta para menteri sudah berendam di kolam. Abu Nawas melepas pakaian dan langsung ikut berendam. Abu Nawas berharap-harap cemas. Kirakira permainan apa lagi yang akan dihadapi. Mungkin permainan kali ini lebih berat karena Baginda Raja tidak memberiwaktu untuk berpikir. Tiba-tiba Baginda Raja membuyarkan lamunan Abu Nawas Beliau berkata kepada Abunawas HaiAbu Nawas, aku mengundangmu mandi bersama karena ingin mengajak engkau ikut dalam permainan kami,” kata Baginda Raja “Permainan apakah itu Paduka yang mulia?” tanya Abu Nawas belum mengerti.

‘Kita sekali-kali melakukan sesuatu yang secara alami hanya bisa dilakukan oleh binatang. Sebagai manusia kita harus bisa melakukannya dengan cara kita masing-masing.” kata Baginda sambil tersenyum

”Hamba belum mengerti Baginda yang mulia,” kata Abu Nawas agak ketakutan.

Masing-masing dari kita harus bisa bertelur seperti ayam dan barangsiapa yang tidak bisa bertelur maka ia harus dihukum!” kata Baginda. Abu Nawas tidak berkata apa-apa. Wajahnya nampak murung. ia semakin yakin dirinya tak akan bisa lolos dari lubang jebakan Baginda dengan mudah. Melihat wajah Abu Nawas murung, wajah Baginda Raja semakin berseri-seri.

“Nah sekarang apalagi yang kita tunggu Kita menyelam lalu naik ke atas sambil menunjukkan telur kita masing-masing, perintah Baginda Raja. Baginda Raja dan para menteri mulai menyelam, kemudian naik ke atas satu persatu dengan membawa sebutir telur ayam. Abu Nawas masih di dalam kolam. Ia tentu saja tidak sempat mempersiapkan telur karena ia memang tidak tahu kalau ia diharuskan bertelur seperti ayam. Kini Abu Nawas tahu kalau Baginda Raja dan para menteri telah mempersiapkan telur masing-masing satu butir. Karena belum ada seorang manusia pun yang bisa bertelur dan tidak akan pernah ada yang bisa.

Karena dadanya mulai terasa sesak. Abu Nawas cepat-cepat muncul ke permukaan kemudian naik ke atas. Baginda Raja langsung mendekatiAbu Nawas.

Abu Nawas nampak tenang, bahkan ia berlaku aneh, tiba-tiba saja ia mengeluarkan suara seperti ayam jantan berkokok, keras sekali sehingga Baginda dan para menterinya merasa heran.

“Ampun Tuanku yang mulia. Hamba tidak bisa bertelur seperti Baginda dan para men

teri kata Abu Nawas sambil membungkuk hormat. “Kalau begitu engkau harus dihukum, ” kata Baginda bangga.

“Tunggu dulu wahai Tuanku yang mulia, ” kata Abu Nawas memohon. “Apalagi hai Abu Nawas, ” kata Baginda tidak sabar.

“Paduka yang mulia, sebelumnya ijinkan hamba membela diri. Sebenarnya kalau hamba mau bertelur, hamba tentu mampu. Tetapi hamba merasa menjadi ayam jantan maka hamba tidak bertelur. Hanya ayam betina saja yang bisa bertelur. Kuk kuru yuuuuuk…!“ kata Abu Nawas dengan membusungkan dada.

Baginda Raja tidak bisa berkata apa-apa. Wajah Baginda dan para menteri yang semula ceria penuh kemenangan kini mandadak berubah menjadi merah padam karena malu. Sebab mereka dianggap ayam betina.

Abu Nawas memang cerdik. Karena merasa malu, Baginda Raja Harun Al Rasyid dan para menteri segera berpakaian dan kembali ke istana tanpa mengucapkan sapatah kata pun.

MemangAbu Nawas banyak akalnya dan telah diakui oleh para ilmuwan sebagai ahli mantiq atau ilmu logika. Gampang saja baginya untuk membolak-balikkan dan mempermainkan kata-kata guna menjatuhkan mental lawan-Iawannya.</Text>},
 
 { id: '11', title: '11.Sebuah Tebakan Jitu', content: <Text>Baginda Raja, Harun AI Rasyid kelihatan murung. Semua menterinya tidak ada yang sanggup menemukan iawaban dari dua pertanyaan Baginda. Bahkan para penasihat kerajaan pun merasa tidak mampu memberi penjelasan yang memuaskan Baginda. Padahal Baginda sendiri ingin mengetahui jawaban yang sebenamya. Mungkin karena amat penasaran, para penasihat Baginda menyarankan agarAbu Nawas saja yang memecahkan dua teka-teki yang membingungkan itu. Tidak begitu lama Abu Nawas dihadapkan. Baginda mengatakan bahwa akhir-akhir ini ia sulit tidur karena diganggu o|eh keingintahuan menyingkap dua rahasia alam.

 “Tuanku yang mulia, sebenarnya rahasia alam yang manakah yang Paduka maksudkan?” tanya Abu Nawas ingin tahu.
 
 “Aku memanggilmu untuk menemukan jawaban dari dua tekateki yang selama ini menggoda pikiranku,” kata Baginda.
 
 “Bolehkah hamba mengetahui kedua teka-teki itu wahai Paduka junjungan hamba?” tanya Abu Nawas mulai was-was hatinya.
 
 Yang pertama, di manakah sebenarnya batas jagat raya ciptaan Tuhan kita?” tanya Baginda.
 
 “Di dalam pikiran, wahai Paduka yang muIia, jawab Abu Nawas tanpa sedikit pun perasaan ragu. “Tuanku yang mulia, ketidakterbatasan itu ada karena adanya keterbatasan. Dan keterbatasan itu ditanamkan oleh Tuhan di dalam otak manusia. Dan” itu manusia tidak akan pernah tahu di mana batas jagat raya ini. Sesuatu yang terbatas tentu tak akan mampu mengukur sesuatu yang tidak terbatas,” lanjut Abu Nawas.
 
 Baginda mulai tersenyum karena merasa puas mendengar penjelasan Abu Nawas yang masuk akal. Kemudian Baginda melanjutkan teka-teki yang kedua.
 
 ‘Wahai Abu Nawas, manakah yang lebih banyak jumlahnya, bintang-bintang di langit ataukah ikan-ikan di laut?” tanya Baginda.
 
 ‘ikan-ikan di taut,” jawab Abu Nawas dengan tangkas. Bagaimana kau bisa Iangsung memutuskan begitu. Apakah engkau pemah menghitung jumlah mereka?“ tanya Baginda heran.
 
 “Paduka yang mulia, bukankah kita semua tahu bahwa ikan-ikan itu setiap hari ditangkapi dalam jumlah besar, namun begitu jumlah mereka tetap banyak seo|ah-olah tidak pernah berkurang karena saking banyaknya. Sementara bintang-bintang itu tidak pernah rontok. jumlah mereka juga banyak,” jawab Abu Nawas meyakinkan.
 
 Seketika itu rasa penasaran yang selama ini menghantui Baginda sirna tak berbekas. Baginda Raja Harun Al Rasyid memberi hadiah Abu Nawas dan istrinya uang yang cukup banyak.</Text>},
 // Tambahkan cerita-cerita lainnya sesuai kebutuhan
];


const App = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const renderStoryItem = ({ item }) => (
    <View style={styles.storyItem}>
      <Text style={styles.storyTitle} onPress={() => setSelectedStory(item)}>
        {item.title}
        
      </Text>
    </View>
  );

  const renderStoryDetails = () => (
    <ScrollView style={styles.scrollView}>
      <View style={styles.storyDetails}>
        <Text style={styles.storyTitle}>{selectedStory.title}</Text>
        <Text style={styles.storyContent}>{selectedStory.content}</Text>
        
        <Text style={styles.goBack} onPress={() => setSelectedStory(null)}>Kembali ke Daftar Cerita</Text>
      </View>
    </ScrollView> )

  return (
    <View style={styles.container}>
      {selectedStory ? renderStoryDetails() : (
        <FlatList
          data={stories}
          keyExtractor={(item) => item.id}
          renderItem={renderStoryItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  storyItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  storyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  storyDetails: {
    padding: 16,
  },
  storyContent: {
    fontSize: 16,
    color: '#555',
    marginTop: 8,
  },
  goBack: {
    color: 'blue',
    marginTop: 16,
    textDecorationLine: 'underline',
  },
});

export default App;
