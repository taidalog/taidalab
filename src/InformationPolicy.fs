// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2025 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom

module InformationPolicy =
    let main =
        """
        <h2>情報の外部送信について</h2>
        <p>アクセス状況の分析のため、当サイトでは「Google アナリティクス」というサービスを利用しています。それに伴い、以下のような利用者のアクセス情報を外部へ送信しています。</p>
        <h2>送信情報</h2>
        <ul>
            <li>閲覧したページの URL</li>
            <li>閲覧したページのタイトル</li>
            <li>当サイトを閲覧した日時</li>
            <li>当サイトを閲覧した際の大まかな位置情報</li>
            <li>当サイトを閲覧した際の IP アドレス</li>
            <li>当サイトを閲覧した際のインターネット端末およびインターネットブラウザの種類</li>
        </ul>
        <h2>送信先</h2>
        <ul>
            <li>Google LLC</li>
        </ul>
        <h2>利用目的</h2>
        <p>当サイトへのアクセス状況の分析およびコンテンツの改善のために利用しています。当該情報は個人を特定するものではありません。Google アナリティクスについては以下のページを参照してください。
            <ul>
                <li><a href="https://marketingplatform.google.com/about/analytics/terms/jp/">Google アナリティクス利用規約</a></li>
                <li><a href="https://policies.google.com/technologies/partner-sites">Google のサービスを使用するサイトやアプリから収集した情報の Google による使用</a></li>
                <li><a href="https://support.google.com/analytics/answer/11593727?hl=ja&ref_topic=1008008&sjid=3916650995392926123-AP">[GA4] データ収集 - アナリティクス ヘルプ</a></li>
            </ul>
        </p>"""

    let init () =
        document.title <- "情報の外部送信について - taidalab"

        let header = document.querySelector "header"
        header.innerHTML <- Content.Common.headerNoHelp
        header.className <- "home"

        (document.getElementById "hamburgerButton").onclick <-
            (fun _ ->
                (document.querySelector "aside").classList.toggle "flagged" |> ignore
                (document.getElementById "barrier").classList.toggle "flagged" |> ignore
                (document.querySelector "main").classList.toggle "flagged" |> ignore)

        (document.getElementById "barrier").onclick <-
            (fun _ ->
                (document.querySelector "aside").classList.remove "flagged" |> ignore
                (document.getElementById "barrier").classList.remove "flagged" |> ignore
                (document.querySelector "main").classList.remove "flagged" |> ignore)

        (document.querySelector "#headerTitle").innerHTML <-
            """<span>情報の外部送信について - </span><span translate="no">taidalab</span>"""

        (document.querySelector "main").innerHTML <- main

        // Resets keyboard shortcuts.
        document.onkeydown <- fun _ -> ()
