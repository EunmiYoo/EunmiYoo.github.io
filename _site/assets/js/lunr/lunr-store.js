var store = [{
        "title": "[Snow-crash] use as UTM(virtualization)",
        "excerpt":"M1 맥북위에 UTM 가상머신을 이용한 스노우크래시 프로그램 띄우기 (1). UTM download -&gt; + 버튼 (프로젝트 생성) (2). Linux 선택 (3). snowcrash 이미지 업로드 (4). 장치 메모리 크기 설정 (5). 초기 설정 후 다시 정보로 들어가 UEFI BOOT 언체크 (6). 디스플레이 virtio-vga-gl로 선택 (7). 네트워크 Emulated VLAN 선택 (8). 포트 포워딩...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git","M1-","UTM","snow-crash","MacM1"],
        "url": "/ecole42/UTM/",
        "teaser": null
      },{
        "title": "[Snow-crash] Level00",
        "excerpt":"1. First, connect to ssh with your ip address : ssh -i ~/.ssh/id_rsa.pub level00@165.22.17.96 -p 4242 you will see… _____ _____ _ / ____| / ____| | | | (___ _ __ _____ _| | _ __ __ _ ___| |__ \\___ \\| '_ \\ / _ \\ \\ /\\...","categories": ["/sprint/deeplearning"],
        "tags": ["CyberSecurity","Github","Git"],
        "url": "/sprint/deeplearning/Level00/",
        "teaser": null
      },{
        "title": "[Snow-crash] Level01",
        "excerpt":"1. The password of level01 is the token that got from level00. x24ti5gi3x0ol2eh4esiuxias 2. So, try login to level01 with the password we got from level00. flag00@SnowCrash:~$ su level01 Password: (x24ti5gi3x0ol2eh4esiuxias) level01@SnowCrash:~$ 3. try to apply the same logic as level00. find / -type f -user \"flag01\" 2&gt;/dev/null find /...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git"],
        "url": "/ecole42/Level01/",
        "teaser": null
      },{
        "title": "[Snow-crash] Level03",
        "excerpt":"1. The password of level03 is the token that got from level02. kooda2puivaav1idi4f57q8iq 2. So, try login to level03 with the password we got from level02 and try to put the command ls. We can see the file level03. level00@SnowCrash:~$ su level03 Password: kooda2puivaav1idi4f57q8iq level03@SnowCrash:~$ ls level03 3. Try to...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git"],
        "url": "/ecole42/Level03/",
        "teaser": null
      },{
        "title": "[Snow-crash] Level02",
        "excerpt":"1. The password of level02 is the token that got from level01. f2av5il02puano7naaf6adaaf 2. So, try login to level02 with the password we got from level01 and try to put the command ‘ls’. We can see the file ‘level01.pcap’. level01@SnowCrash:~$ su level02 Password: f2av5il02puano7naaf6adaaf level02@SnowCrash:~$ ls level02.pcap 3. So, what...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git"],
        "url": "/ecole42/Level02/",
        "teaser": null
      },{
        "title": "[Snow-crash] Level04",
        "excerpt":"1. The password of level04 is the token that got from level03. qi0maab88jeaj46qoumi7maus 2. So, try login to level04 with the password we got from level03 and try to put the command ‘ls -la’. We can see the file ‘level04’. level03@SnowCrash:~$ su level04 Password: qi0maab88jeaj46qoumi7maus level04@SnowCrash:~$ 3. Let’s go inside...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git"],
        "url": "/ecole42/Level04/",
        "teaser": null
      },{
        "title": "[Snow-crash] Level05",
        "excerpt":"1. The password of Level05 is the token that got from Level04. ne2searoevaevoem4ov4ar8ap 2. So, try login to Level05 with the password we got from Level04 and try to put the command ‘ls -la’. Let’s see inside in level05. level05@localhost's password: ne2searoevaevoem4ov4ar8ap You have new mail. level05@SnowCrash:~$ level05@SnowCrash:~$ ls -la...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git"],
        "url": "/ecole42/Level05/",
        "teaser": null
      },{
        "title": "[Snow-crash] Level06",
        "excerpt":"1. The password of Level06 is the token that got from Level05. viuaaale9huek52boumoomioc 2. So, try login to Level06 with the password we got from Level05 and try to put the command ls. We can see the file Level06. level05@SnowCrash:/var/mail$ su level06 Password: level06@SnowCrash:~$ ls -la total 24 dr-xr-x---+ 1...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git"],
        "url": "/ecole42/Level06/",
        "teaser": null
      },{
        "title": "[Snow-crash] Level07",
        "excerpt":"1. The password of Level07 is the token that got from Level06. wiok45aaoguiboiki2tuin6ub 2. So, try login to Level07 with the password we got from Level06 and try to put the command ls. We can see the file Level07. and try to execute. level06@SnowCrash:~$ su level07 Password: level07@SnowCrash:~$ ls -la...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git"],
        "url": "/ecole42/Level07/",
        "teaser": null
      },{
        "title": "[Snow-crash] Level08",
        "excerpt":"1. The password of Level08 is the token that got from Level07. wiok45aaoguiboiki2tuin6ub 2. So, try login to Level08 with the password we got from Level07 and try to put the command ls. We can see the files Level08 and token. and try to cat and execute. level07@SnowCrash:~$ su level08...","categories": ["ecole42"],
        "tags": [],
        "url": "/ecole42/Level08/",
        "teaser": null
      },{
        "title": "[Snow-crash] Level09",
        "excerpt":"1. The password of Level09 is the token that got from Level08. wiok45aaoguiboiki2tuin6ub 2. So, try login to Level09 with the password we got from Level08 and try to put the command ls. We can see the files Level09 and token. and try to cat and execute as we did...","categories": ["ecole42"],
        "tags": ["CyberSecurity","Github","Git"],
        "url": "/ecole42/Level09/",
        "teaser": null
      },{
        "title": "일상",
        "excerpt":"이건 테스트용  ","categories": ["blog"],
        "tags": ["python","AI engineering","Github"],
        "url": "/blog/daily/",
        "teaser": null
      },{
        "title": "위클리 페이퍼 1",
        "excerpt":"선형대수학이란 어떤 학문이며, 왜 머신러닝에 필요할까? 선형대수학 이란? 선형대수학은 벡터, 행렬, 선형 변환 등을 연구하는 수학의 한 분야. 데이터를 효율적으로 표현하고, 그 데이터들 사이의 선형적인 관계를 분석하며, 다양한 변환을 통해 데이터를 조작하는 방법을 다룸. 머신러닝에서 선형대수학이 필요한 주된 이유? 데이터 표현: 머신러닝에서 다루는 이미지, 텍스트, 수치 데이터 등 모든 데이터는...","categories": ["sprint"],
        "tags": ["python","AI engineering","Github"],
        "url": "/sprint/WeeklyPaper/",
        "teaser": null
      },{
        "title": "위클리 페이퍼 2",
        "excerpt":"지도학습과 비지도학습의 차이 머신러닝에서 프로그램은 ‘학습(Learning)’을 하게 됩니다. 이때, 학습을 하는 방법에 따라 크게 지도학습과 비지도학습으로 나뉠 수 있습니다. 지도학습 (Supervised Learning) 정답이 있는 데이터(레이블링된 데이터) 를 사용하여 모델을 훈련시키는 학습 방법 주요 특징: 입력 데이터와 정답(레이블)이 쌍으로 제공 모델이 입력과 출력 간의 관계를 학습 예측 성능을 정확히 측정 가능...","categories": ["sprint"],
        "tags": ["python","AI engineering","machine learning","supervised learning","unsupervised learning","loss function","cross validation"],
        "url": "/sprint/WeeklyPaPer2/",
        "teaser": null
      },{
        "title": "위클리 페이퍼 3",
        "excerpt":"결정 트리의 장점과 단점 결정 트리는 데이터를 분류하거나 예측하기 위해 사용되는 지도학습 알고리즘 장점 1. 쉽고 직관적인 이해 가능성 시각적 표현: 계층 구조를 통해 어떤 속성이 중요한지 쉽게 파악 가능 투명성: 신경망과 달리 내부 작동 방식이 명확하게 드러남 해석 용이성: 의사결정 과정을 단계별로 추적 가능 2. 적은 데이터 전처리 요구...","categories": ["sprint"],
        "tags": ["python","AI engineering","machine learning","decision tree","boosting","dimensionality reduction"],
        "url": "/sprint/Weekly-Paper-3/",
        "teaser": null
      },{
        "title": "[Deep Learning] CNN (Convolutional Neural Network)",
        "excerpt":"CNN (Convolutional Neural Network)이란? CNN은 주로 이미지 인식과 같은 컴퓨터 비전 분야의 데이터를 분석하기 위해 사용되는 인공 신경망의 한 종류입니다. 핵심은 합성곱(Convolution) 연산을 사용한다는 점입니다. 컴퓨터는 이미지를 어떻게 볼까? 흑백 이미지 단일 채널 사용 각 픽셀은 0~255 범위의 하나의 값만 가짐 명암의 정도를 나타냄 컬러 이미지 RGB 3개 채널 사용...","categories": ["deeplearning"],
        "tags": ["python","AI engineering","deep learning","CNN","computer vision"],
        "url": "/deeplearning/CNN/",
        "teaser": null
      },{
        "title": "[Deep Learning] 딥러닝의 핵심 개념과 최적화",
        "excerpt":"딥러닝 모델의 최적화가 어려운 이유 딥러닝 모델을 최적화하는 과정에서 발생하는 주요 문제들과 그 원인을 살펴보겠습니다. 1. 모델의 비선형성 활성화 함수의 비선형성으로 인해 손실 함수의 지형이 매우 복잡해집니다. 비볼록(Non-convex) 지형 형성 복잡하고 울퉁불퉁한 표면 전역 최솟값을 찾기 어려움 2. 고차원성과 과적합 많은 개수의 파라미터를 포함하여 차원이 증가하면서 발생하는 문제: 과적합 위험...","categories": ["deeplearning"],
        "tags": ["python","AI engineering","deep learning","machine learning","neural networks"],
        "url": "/deeplearning/DeepLearning/",
        "teaser": null
      }]
