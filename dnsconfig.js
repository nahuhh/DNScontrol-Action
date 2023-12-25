var REG_NONE = NewRegistrar("none");
var DSP_DESEC = NewDnsProvider("desec");

D("monerokon.com", REG_NONE,DnsProvider(DSP_DESEC),
	DefaultTTL(3600),

	A("www", "23.137.248.51"),
	A("@", "23.137.248.51"),
  	A("funding", "98.42.102.29")
//	NS("NAMESERVER", "ns1.desec.io."),
//	NS("NAMESERVER", "ns2.desec.org.")
);
