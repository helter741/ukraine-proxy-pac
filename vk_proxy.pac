
var direct = "DIRECT";

var proxy = "PROXY 78.155.213.111:3128"


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
  || dnsDomainIs(host, ".drweb.ru")
  || dnsDomainIs(host, ".auto.ru")
  || dnsDomainIs(host, ".mail.ru")
  || dnsDomainIs(host, "whoer.net")
  || dnsDomainIs(host, "mail.ru")
  || dnsDomainIs(host, "yandex.ru")
  || dnsDomainIs(host, "yandex.ua")
  || dnsDomainIs(host, "yastatic.net")
  || dnsDomainIs(host, ".mycdn.me")
  || dnsDomainIs(host, "ok.ru"))
  { return proxy; }
 else
  { return direct; }

}