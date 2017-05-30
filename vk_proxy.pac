
var direct = "DIRECT";

var proxy = "PROXY 134.0.118.218:8118"


function FindProxyForURL(url, host)
{

// Blocked websites
if (dnsDomainIs(host, "vk.com")
  || dnsDomainIs(host, ".vk.com")
  || dnsDomainIs(host, ".userapi.com")
  || dnsDomainIs(host, "vk.cc")
  || dnsDomainIs(host, ".ok.ru")
  || dnsDomainIs(host, ".ya.ru")
  || dnsDomainIs(host, ".yandex.ru")
  || dnsDomainIs(host, ".yandex.ua")
  || dnsDomainIs(host, ".kaspersky.ru")
  || dnsDomainIs(host, ".kaspersky.com")
  || dnsDomainIs(host, "kaspersky.ru")
  || dnsDomainIs(host, ".drweb.ru")
  || dnsDomainIs(host, ".auto.ru")
  || dnsDomainIs(host, ".mail.ru")
  || dnsDomainIs(host, "mail.ru")
  || dnsDomainIs(host, ".mradx.net")
  || dnsDomainIs(host, ".imgsmail.ru")
  || dnsDomainIs(host, "yandex.ru")
  || dnsDomainIs(host, "yandex.ua")
  || dnsDomainIs(host, "yastatic.net")
  || dnsDomainIs(host, ".mycdn.me")
  || dnsDomainIs(host, "ok.ru")
  || dnsDomainIs(host, "whoer.net"))
  { return proxy; }
 else
  { return direct; }

}
