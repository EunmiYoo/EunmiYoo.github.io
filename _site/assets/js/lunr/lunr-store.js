var store = [{
        "title": "Snow-crash use as UTM(virtualization)",
        "excerpt":"M1 맥북위에 UTM 가상머신을 이용한 스노우크래시 프로그램 띄우기 (1). UTM download -&gt; + 버튼 (프로젝트 생성) (2). Linux 선택 (3). snowcrash 이미지 업로드 (4). 장치 메모리 크기 설정 (5). 초기 설정 후 다시 정보로 들어가 UEFI BOOT 언체크 (6). 디스플레이 virtio-vga-gl로 선택 (7). 네트워크 Emulated VLAN 선택 (8). 포트 포워딩...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git","M1-","UTM","snow-crash","MacM1"],
        "url": "/ecole42/UTM/",
        "teaser": null
      },{
        "title": "Snow-crash Level00",
        "excerpt":"1. First, connect to ssh with your ip address : ssh -i ~/.ssh/id_rsa.pub level00@165.22.17.96 -p 4242 you will see… _____ _____ _ / ____| / ____| | | | (___ _ __ _____ _| | _ __ __ _ ___| |__ \\___ \\| '_ \\ / _ \\ \\ /\\...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git"],
        "url": "/ecole42/Level00/",
        "teaser": null
      },{
        "title": "Snow-crash Level01",
        "excerpt":"1. The password of level01 is the token that got from level00. x24ti5gi3x0ol2eh4esiuxias 2. So, try login to level01 with the password we got from level00. flag00@SnowCrash:~$ su level01 Password: (x24ti5gi3x0ol2eh4esiuxias) level01@SnowCrash:~$ 3. try to apply the same logic as level00. find / -type f -user \"flag01\" 2&gt;/dev/null find /...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git"],
        "url": "/ecole42/level01/",
        "teaser": null
      },{
        "title": "Snow-crash Level03",
        "excerpt":"1. The password of level03 is the token that got from level02. kooda2puivaav1idi4f57q8iq 2. So, try login to level03 with the password we got from level02 and try to put the command ls. We can see the file level03. level00@SnowCrash:~$ su level03 Password: kooda2puivaav1idi4f57q8iq level03@SnowCrash:~$ ls level03 3. Try to...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git"],
        "url": "/ecole42/Level03/",
        "teaser": null
      },{
        "title": "Snow-crash Level02",
        "excerpt":"1. The password of level02 is the token that got from level01. f2av5il02puano7naaf6adaaf 2. So, try login to level02 with the password we got from level01 and try to put the command ‘ls’. We can see the file ‘level01.pcap’. level01@SnowCrash:~$ su level02 Password: f2av5il02puano7naaf6adaaf level02@SnowCrash:~$ ls level02.pcap 3. So, what...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git"],
        "url": "/ecole42/Level02/",
        "teaser": null
      },{
        "title": "Snow-crash Level04",
        "excerpt":"1. The password of level04 is the token that got from level03. qi0maab88jeaj46qoumi7maus 2. So, try login to level04 with the password we got from level03 and try to put the command ‘ls -la’. We can see the file ‘level04’. level03@SnowCrash:~$ su level04 Password: qi0maab88jeaj46qoumi7maus level04@SnowCrash:~$ 3. Let’s go inside...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git"],
        "url": "/ecole42/Level04/",
        "teaser": null
      },{
        "title": "Snow-crash Level05",
        "excerpt":"1. The password of Level05 is the token that got from Level04. ne2searoevaevoem4ov4ar8ap 2. So, try login to Level05 with the password we got from Level04 and try to put the command ‘ls -la’. Let’s see inside in level05. level05@localhost's password: ne2searoevaevoem4ov4ar8ap You have new mail. level05@SnowCrash:~$ level05@SnowCrash:~$ ls -la...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git"],
        "url": "/ecole42/Level05/",
        "teaser": null
      },{
        "title": "Snow-crash Level06",
        "excerpt":"1. The password of Level06 is the token that got from Level05. viuaaale9huek52boumoomioc 2. So, try login to Level06 with the password we got from Level05 and try to put the command ls. We can see the file Level06. level05@SnowCrash:/var/mail$ su level06 Password: level06@SnowCrash:~$ ls -la total 24 dr-xr-x---+ 1...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git"],
        "url": "/ecole42/Level06/",
        "teaser": null
      },{
        "title": "Snow-crash Level07",
        "excerpt":"1. The password of Level07 is the token that got from Level06. wiok45aaoguiboiki2tuin6ub 2. So, try login to Level07 with the password we got from Level06 and try to put the command ls. We can see the file Level07. and try to execute. level06@SnowCrash:~$ su level07 Password: level07@SnowCrash:~$ ls -la...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git"],
        "url": "/ecole42/Level07/",
        "teaser": null
      },{
        "title": "Snow-crash Level08",
        "excerpt":"1. The password of Level08 is the token that got from Level07. wiok45aaoguiboiki2tuin6ub 2. So, try login to Level08 with the password we got from Level07 and try to put the command ls. We can see the files Level08 and token. and try to cat and execute. level07@SnowCrash:~$ su level08...","categories": ["ecole42"],
        "tags": [],
        "url": "/ecole42/Level08/",
        "teaser": null
      },{
        "title": "Snow-crash Level09",
        "excerpt":"1. The password of Level09 is the token that got from Level08. wiok45aaoguiboiki2tuin6ub 2. So, try login to Level09 with the password we got from Level08 and try to put the command ls. We can see the files Level09 and token. and try to cat and execute as we did...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git"],
        "url": "/ecole42/Level09/",
        "teaser": null
      },{
        "title": "test",
        "excerpt":"이건 테스트용  ","categories": ["blog"],
        "tags": ["python","AI engineering","Github"],
        "url": "/blog/daily/",
        "teaser": null
      },{
        "title": "Weekly paper - sprint bootcamp",
        "excerpt":" ","categories": ["sprint"],
        "tags": ["python","AI engineering","Github"],
        "url": "/sprint/WeeklyPaper/",
        "teaser": null
      }]
