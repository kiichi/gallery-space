function translateLiteral(){
    var trans = getTranslation();

    $('html').attr('lang','ja');
    var dict = {};
    var missing = {};
    $(".literal").each(function(idx,item){
        console.log(idx,$(item).attr('id'));
        var id = $(item).attr('id');
        var content = item.innerHTML;
        if (trans[id]){
            dict[id] = {'en':trans[id]['en'],'ja':trans[id]['ja']};
            item.innerHTML = trans[id]['ja'];
        }
        else {
            missing[id] = {'en':item.innerHTML,'ja':''};
        }
    });
    //console.log(JSON.stringify(dict,2,2));

    console.log('<!DOCTYPE html><html lang="ja">'+$('html').html()+'</html>');
    
    console.error('ERROR ?: add missing ',JSON.stringify(missing,4,4));
}

function getTranslation(){
    return {
        "navbar-nav-home": {
          "en": "Home",
          "ja": "ホーム"
        },
        "navbar-nav-about": {
          "en": "About",
          "ja": "ギャラリーについて"
        },
        "navbar-nav-photos": {
          "en": "Photos",
          "ja": "写真"
        },
        "navbar-nav-prices": {
          "en": "Prices",
          "ja": "ご利用案内"
        },
        "navbar-nav-contact-us": {
          "en": "Contact Us",
          "ja": "お問い合わせ"
        },
        "banner-main-1": {
          "en": "\n                    High Ceiling Gallery Space <span class=\"block\" style=\"transition: none 0s ease 0s; text-align: inherit; line-height: 38px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 500; font-size: 30px;\"> on 60th Street, Manhattan </span>\n                    ",
          "ja": "\n                    マンハッタン　６０丁目 <span class=\"block\" style=\"transition: none 0s ease 0s; text-align: inherit; line-height: 38px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 500; font-size: 30px;\"> 開放感のある展示スペース </span>\n                    "
        },
        "banner-main-see-more": {
          "en": "See More",
          "ja": "もっと詳しく"
        },
        "banner-main-inquiry": {
          "en": "Inquiry",
          "ja": "お問い合わせ"
        },
        "banner-main-2": {
          "en": "\n                    12 ft ceiling &amp; 635 SQ FT ( 59 SQ METERS ) <span class=\"block\" style=\"transition: none 0s ease 0s; text-align: inherit; line-height: 38px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 500; font-size: 30px;\"> Fully-transformable space  </span>\n                    ",
          "ja": "\n                    高さ　12 ft &amp;　展示スペース 635 SQ FT ( 59 SQ METERS ) <span class=\"block\" style=\"transition: none 0s ease 0s; text-align: inherit; line-height: 38px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 500; font-size: 30px;\"> 自由にカスタマイズできるギャラリースペース  </span>\n                    "
        },
        "banner-main-3": {
          "en": "\n                    Experienced Sales Staff On-Site <span class=\"block\">10AM-5PM</span>\n                    ",
          "ja": "\n                    ギャラリースタッフが販売のお手伝い <span class=\"block\">10AM-5PM</span>\n                    "
        },
        "about-heading": {
          "en": "Gallery helping your projects gain more momentum.",
          "ja": "世界のアーティストの作品をニューヨークから"
        },
        "about-summary": {
          "en": "Welcome to our exquisite gallery space for rent, nestled in the heart of Manhattan's vibrant 60th Street. Located on the second floor, our gallery offers a serene and inviting atmosphere for art enthusiasts. As you step inside, you'll be greeted by a flood of natural light pouring through the expansive windows, providing a stunning view of the bustling street below. Our gallery specializes in showcasing the captivating artwork of talented artists, offering a unique blend of traditional and contemporary aesthetics. ",
          "ja": "マンハッタンの活気ある60丁目の中心にある、当社の洗練されたギャラリースペースへようこそ。2階にある当ギャラリーは、アート愛好家の皆様に落ち着いた雰囲気を提供します。一歩足を踏み入れると、大きな窓から差し込む自然光が皆様を迎え、下のにぎやかな街の見事な風景を楽しむことができます。当ギャラリーは、才能あふれるアーティストたちの魅力的な作品を展示することに特化しており、伝統的な美学と現代的な美学が見事に融合した空間を提供しています。"
        },
        "about-maximize": {
          "en": "<strong>Maximize</strong> your artwork exposure",
          "ja": "作品の魅力を最大限に伝える"
        },
        "about-maximize-details": {
          "en": "Gallery owner / manager / staff members are on-site 10am - 5pm. With a dedicated sales representative at hand, artists have the opportunity to have their artworks not only exhibited but also sold directly to interested patrons. Our knowledgeable staff is equipped to provide guidance and support throughout the selling process, ensuring that each artwork finds its rightful place in the hearts and homes of appreciative collectors. ",
          "ja": "ギャラリーのオーナー、マネージャー、スタッフは午前10時から午後5時まで現地にいます。専任の営業担当者が常駐しているため、アーティストは自分の作品を展示するだけでなく、興味を持ったパトロンに直接販売する機会も得られます。当ギャラリーの知識豊富なスタッフは、販売プロセス全体を通じてガイダンスとサポートを提供し、各作品が理想的なオーナーを見つけるよう尽力します。"
        },
        "about-endless": {
          "en": "<strong>Endless</strong> layout possibilities",
          "ja": "柔軟な展示スペース"
        },
        "about-endless-details": {
          "en": "Fully-transformable space and 12 ft ceiling. 2 Rooms and 1 inventory storage. Whether you're an artist looking to exhibit your creations or an event organizer seeking an elegant venue, our gallery space is the perfect canvas to bring your vision to life. With its prime location and captivating ambiance, our gallery space offers an exceptional opportunity to immerse yourself in the rich tapestry of art and culture.",
          "ja": "自由にレイアウトを変えられるスペースと12フィートの天井高。2つの部屋と1つのストレージがあります。アーティストであれば自分の作品を展示する場所として、またイベントオーガナイザーにとって洗練された会場として、当ギャラリーのスペースはあなたの想像を実現するパーフェクトな舞台となります。その抜群の立地と心を引きつけるマンハッタンにて、当ギャラリーのスペースは、芸術と文化の豊かな世界に身を投じる素晴らしいチャンスを提供します。"
        },
        "about-artist": {
          "en": "<strong>Artist</strong> focused space",
          "ja": "アーティストにスポットライトを"
        },
        "about-artist-details": {
          "en": "Nestled within a vibrant artistic hub, our gallery space is seamlessly connected to a stylish hair salon, offering a unique fusion of beauty and creativity. Step inside and be greeted by our friendly and knowledgeable staff, who are dedicated to welcoming visitors and showcasing the exquisite artworks on display. Our team is not only passionate about art but also well-versed in the stories and techniques behind each piece, ensuring a personalized and engaging experience for both artists and art enthusiasts.",
          "ja": "芸術とビジネスが息づく活気ある地区にある当ギャラリーは、スタイリッシュなヘアサロンと一体化した独特の空間で、美と創造性が融合しています。一歩足を踏み入れると、訪問者を暖かく迎え、展示されている卓越した作品を紹介するために尽力する、親しみやすく知識豊富なスタッフに出会います。ギャラリースタッフは、芸術への深い愛情を持つだけでなく、各作品の背後にある物語や技法についても詳しく、アーティストもアート愛好家も一人ひとりに対して、引き込まれるような場を提供します。"
        },
        "prices-heading": {
          "en": "well thoughtout plans ",
          "ja": "プラン"
        },
        "prices-title": {
          "en": "Fit your exhbition schedule",
          "ja": "様々な展示に対応"
        },
        "prices-details": {
          "en": "Please contact us for more details",
          "ja": "お気軽にお問い合わせください"
        },
        "prices-1-title": {
          "en": "Weekend Pop-Up",
          "ja": "ショップまたはワークショップなどのイベントスペースとして"
        },
        "prices-1-price": {
          "en": "\n                            <i class=\"fa fa-dollar\"></i>\n                            <h1>1200</h1> <span class=\"dur\">/ 3 days</span>\n                        ",
          "ja": "\n                           \n                            <h1></h1></span>\n                        "
        },
        "prices-1-list": {
          "en": "\n<li><span>Opening Reception Support</span></li>                        <li><span>Friday, Saturday, and Sunday</span></li>\n                        <li><span>Instagram / Youtube Live Support</span></li>\n                        <li><span>Email and SNS Marketing</span></li>\n                    ",
          "ja": "\n<li><span>ギャラリーに併設されたショップセクション</span></li>                        <li><span>オンラインショップ</span></li>　\n　<li><span>ワークショップもしくはイベントスペースとして</span></li>                        <li><span>Instagram / Youtube ライブサポート</span></li>\n                        <li><span>EmailとSNSマーケティング</span></li>\n                    "
        },
        "prices-1-contact": {
          "en": "Contact Us",
          "ja": "お問い合わせ"
        },
        "prices-2-title": {
          "en": "Weekly Plan",
          "ja": "ウィークリー"
        },
        "prices-2-price": {
          "en": "\n                            <i class=\"fa fa-dollar\"></i>\n                            <h1>1500</h1> <span class=\"dur\">/ week</span>\n                        ",
          "ja": "\n                            <i class=\"fa fa-dollar\"></i>\n                            <h1>1500</h1> <span class=\"dur\">/ 週</span>\n                        "
        },
        "prices-2-list": {
          "en": "\n<li><span>Opening Reception Support</span></li>                        <li><span>Onsite Workshop or Event Opportunity</span></li>\n                        <li><span>Instagram / Youtube Live Support</span></li>\n                        <li><span>Online Shop Listing</span></li>\n                        <li><span>Email and SNS Marketing</span></li>\n                    ",
          "ja": "\n<li><span>オープニング・レセプションのサポート</span></li>                        <li><span>現地でのワークショップまたはイベント</span></li>\n                        <li><span>Instagram / Youtube ライブサポート</span></li>\n                        <li><span>オンラインショップリスティング</span></li>\n                        <li><span>EmailとSNSマーケティング</span></li>\n                    "
        },
        "prices-2-contact": {
          "en": "Contact Us",
          "ja": "お問い合わせ"
        },
        "prices-3-title": {
          "en": "Monthly",
          "ja": "マンスリー"
        },
        "prices-3-price": {
          "en": "\n                            <i class=\"fa fa-dollar\"></i>\n                            <h1>4500</h1> <span class=\"dur\">/ month</span>\n                        ",
          "ja": "\n                            <i class=\"fa fa-dollar\"></i>\n                            <h1>4500</h1> <span class=\"dur\">/ 月</span>\n                        "
        },
        "prices-3-list": {
          "en": "\n<li><span>Opening Reception Support</span></li>                        <li><span>Extra Storage Room</span></li>\n                        <li><span>Onsite Workshop or Event Opportunity</span></li>\n                        <li><span>Instagram / Youtube Live Support</span></li>\n                        <li><span>Online Shop Listing</span></li>\n                        <li><span>Email and SNS Marketing</span></li>\n                    ",
          "ja": "\n<li><span>オープニング・レセプションのサポート</span></li>                        <li><span>追加のストレージルーム</span></li>\n                        <li><span>現地でのワークショップまたはイベント</span></li>\n                        <li><span>Instagram / Youtube ライブサポート</span></li>\n                        <li><span>オンラインショップリスティング</span></li>\n                        <li><span>EmailとSNSマーケティング</span></li>\n                    "
        },
        "prices-3-contact": {
          "en": "Contact Us",
          "ja": "お問い合わせ"
        },
        "map-address": {
          "en": "\n                     <h2 class=\"darkcolor top25 bottom35\"><span class=\"defaultcolor\">MK60 Gallery</span></h2>\n                     <p>Address: 208 E 60th St, New York, NY 10022</p>\n                     <p>Phone: +1 212 752 9229</p>\n                     <p>Email: <a href=\"mailto:mk60gallery@gmail.com\">mk60gallery@gmail.com</a></p>\n                     <p>Open 7 days:10am-5pm</p>\n                ",
          "ja": "\n                     <h2 class=\"darkcolor top25 bottom35\"><span class=\"defaultcolor\">MK60　 Gallery</span></h2>\n                     <p>住所: 208 E 60th St, New York, NY 10022</p>\n                     <p>電話: +1 212 752 9229</p>\n                     <p>Email: <a href=\"mailto:mk60gallery@gmail.com\">mk60gallery@gmail.com</a></p>\n                     <p>営業日: 週7日、10時-17時</p>\n                "
        },
        "map-description": {
          "en": "Embrace the energy of 60th street Manhattan, where creativity flourishes and artistic passions thrive. Our inviting gallery space, with its strategic location and exceptional visibility, offers a remarkable opportunity to showcase your talent and captivate the hearts and minds of all who step through the door.",
          "ja": "創造性が溢れ、芸術への情熱が活き活きと躍動するマンハッタンの60丁目のエネルギーを感じてみてください。"
        },
        "contact-heading": {
          "en": "get in touch with <span class=\"defaultcolor\">us </span>",
          "ja": "ご連絡"
        },
        "contact-message": {
          "en": "Any questions? Feel free to contact us or visit our gallery",
          "ja": "質問もしくはギャラリーに直接お越しください"
        },
        "photo-title": {
            "en": "Gallery Photos",
            "ja": "ギャラリーフォト"
        },
        "photo-sub-title": {
            "en": "Exhibition Spaces",
            "ja": "展示スペース"
        },
        "photo-1-title": {
            "en": "Section A",
            "ja": "セクションA"
        },
        "photo-1-desc": {
            "en": "Entrance Area",
            "ja": "入り口付近のエリア"
        },
        "photo-2-title": {
            "en": "Section B",
            "ja": "セクションB"
        },
        "photo-2-desc": {
            "en": "Street Facing Room Panorama Photo",
            "ja": "通り沿い（パノラマ）"
        },
        "photo-4-title": {
            "en": "Section A",
            "ja": "セクションA"
        },
        "photo-4-desc": {
            "en": "Panorama",
            "ja": "パノラマ写真"
        },
        "photo-6-title": {
            "en": "Section B",
            "ja": "セクションB"
        },
        "photo-6-desc": {
            "en": "Right Side",
            "ja": "右側"
        },
        "photo-7-title": {
            "en": "Section B",
            "ja": "セクションB"
        },
        "photo-7-desc": {
            "en": "Main Area with Counter",
            "ja": "メインのエリアとカウンター"
        },
        "photo-8-title": {
            "en": "Section A",
            "ja": "セクションA"
        },
        "photo-8-desc": {
            "en": "Left Side with Storage",
            "ja": "左側とストレージ"
        },
        "photo-9-title": {
            "en": "Section B",
            "ja": "セクションB"
        },
        "photo-9-desc": {
            "en": "Left Side",
            "ja": "左側"
        },
        "photo-10-title": {
            "en": "Section A",
            "ja": "セクションA"
        },
        "photo-10-desc": {
            "en": "Reception Desk",
            "ja": "受付デスクと入り口正面"
        }
      };
}



// function email() {
//     document.querySelector('.contactus').addEventListener('submit', function(event) {
//         event.preventDefault(); // This prevents the default form submission behavior.
    
//         // Get the input from the form
//         var name = document.getElementById('nameInput').value;
//         var email = document.getElementById('emailInput').value;
//         var phone = document.getElementById('phoneInput').value;
//         var message = document.getElementById('messageInput').value;
        
//         // Compose the email
//         var subject = encodeURIComponent("Inquiry from " + name);
//         var body = encodeURIComponent(
//             "Name: " + name + 
//             "\nEmail: " + email + 
//             "\nPhone: " + phone + 
//             "\n\nMessage:\n" + message
//         );
        
//         // Open the mail application with the email data
//         window.location.href = "mailto:your_email@example.com?subject=" + subject + "&body=" + body;
//     });
// }
