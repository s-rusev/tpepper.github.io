repo="tpepper/kudos-badge"
commit="8da5ea2a04664db616b115511403b71570341f74"
url="https://github.com/"+repo+"/commit/"+commit+".patch"

fetch(url, {
	mode: 'no-cors'
})
.then(function(response) {
	kudo = Body.text();
	console.log(kudo);
	return kudo;
}).catch(function(error) {
	console.log(error);
	return "could not find kudo commit at "+url;
});
