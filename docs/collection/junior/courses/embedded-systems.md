<script setup>
import CourseInfo from '../../../.vitepress/components/CourseInfo.vue'
</script>

# 嵌入式系统设计与应用

---

<CourseInfo
  :credits="2.5"
  :hours="48"
  :year="2024"
  :breakdown="{
    '平时成绩': '50%',
    '期末成绩': '50%'
  }"
/>

## 考试题型

一、单选题（本大题共 32 题）

二、判断题（本大题共 12 题）

三、填空题（本大题共 8 题）

四、应用题（本大题共 3 题）

```text
本文档以头歌在线测试为基础进行整理，只涉及期末考试速成知识点，但也无法面面俱到。
因为头歌测试不分知识点，所以整理起来确实比预想更耗费时间。
同时本人并不深入嵌入式及硬件方向，所以可能架构不是很清晰，请大家见谅。
除知识点以外，期末机考涉及linux基础命令操作，确实不难，请各位自行复习。
(本文档也有涉及，但不再单独列出。)
```

## 00.嵌入式基础概念

1. **嵌入式系统的概念**：以应用为中心，以计算机技术为基础，软件硬件**可裁剪**，能满足应用系统对功能、可靠性、成本、体积、能耗严格要求的专用计算机系统。

2. **Liux系统有四种基本文件类型**：普通文件、**目录文件**、设备文件和链接文件。

3. **根据嵌入式系统使用的微处理器，可以将嵌入式系统分为**：嵌入式微控制器、嵌入式微处理器、嵌入式DSP处理器以及嵌入式片上系统。

4. **在 Linux 系统中，gcc 编译过程可以分为四个步骤，分别是**：**预处理、编译、汇编、链接**。

5. **文件系统**保存在磁盘的( )：

> 超级块包含文件系统的元数据，如文件系统的类型、大小、状态等信息。

选择正确的答案：

- A. 引导块
- **B. 超级块**
- C. i节点块
- D. 数据块

6. **Linux 系统中的设备可分为三类：字符设备、块设备和网络设备，其中不是基于文件系统访问的设备是**：

> 字符设备和块设备通过文件系统进行访问，而网络设备通常不通过文件系统进行访问。

选择正确的答案：

- A. 字符设备
- B. 块设备
- **C. 网络设备**
- D. 字符和块设备

7.  **Linux 系统默认的文件系统类型是**：

- A. FAT16
- B. FAT32
- **C. EXT3**
- D. NTFS

8. 串口波特率设置
   **题目**： 实现设置波特率参数的正确方式是（ ）  
   A. `newtio.c_cflag ~CS115200`  
   B. `cfsetispeed(&newtio, B115200)`  
   C. `newtio.c_cflag | 115200`  
   D. `options.c_cflag | B115200`

**答案**： B. `cfsetispeed(&newtio, B115200)`

> \*\*cfsetispeed` 函数用于设置输入波特率，`B115200` 是标准波特率常量。其他选项语法错误或未正确赋值。

9. 在嵌入式系统中，常用于存储启动代码和关键数据的存储器类型是 **flash**。

10. 只读文件系统

- **cramfs** 是一个**只读的文件系统**。

## 01.Linux常用命令

1. **chmod** 命令可更改一个文件的**权限设置**。

2. 在 Linux 系统中使用 `mkdir` 命令创建一个新的目录时，在其父目录不存在时，必须先创建其父目录的选项是 `-p`。

> **-p**：这个选项允许你创建多级目录，即使父目录不存在也会被一并创建。

3. **终止一个前台进程**可能用到的命令和操作是：

- `kill`：用来终止指定进程，可以用于终止后台进程或者通过 PID 指定的前台进程。
- `Ctrl-C`：这是常用的快捷键，在终端中直接发送中断信号给前台进程，通常用来终止前台进程。
- `shut down`：用于关闭系统，不是终止前台进程。
- `halt`：用于关闭系统或停止计算机，不是用来终止前台进程。

选择正确的答案：

- **A. kill**
- **B. Ctrl-C**
- C. shut down
- D. halt

- 按下 ( ) 键能终止当前运行的命令：
  - A、Ctrl-B
  - **B、Ctrl-C**
  - C、Ctrl-D
  - D、Ctrl-F

4. **删除当前目录 abc 以及下面的所有子目录和文件，并不要求提示任何确认信息的命令是（ ）**

> `rm -rf abc`：`rm` 是用来删除文件或目录的命令，**`-r`** 选项表示**递归**删除目录及其内容，**`-f`** 选项表示**强制删除**，不提示确认。

选择正确的答案：

- A. `del abc*.*`：这是 Windows 的删除命令格式，在 Linux 中不适用。
- **B. `rm -rf abc`**
- C. `rmdir abc`：`rmdir` 用于删除空目录，如果目录不为空，会失败。
- D. `rm -r abc*.*`：格式错误，`*.*` 通常用于 Windows 系统，且该命令缺少 `-f` 选项，无法强制删除且删除方式不完全正确。

5. **下面（ ）命令能用来删除当前目录及其子目录下名为 'core' 的文件**

> `-exec rm {} \`：对于每个找到的文件（通过 `{}` 占位符传递给 `rm` 命令），执行删除操作。`\` 是用来结束 `-exec` 命令的。

选择正确的答案：

- **A. `find . -name core -exec rm {} \`**
- B. `find . -name core -exec rm`
- C. `find . -name core -exec rm {}`
- D. `find . -name core -exec rm {} -`

6. **命令 cd ~ 的用途是（ ）**

> `cd ~`：这是切换到当前用户的主目录的命令。`~` 是一个快捷符号，表示当前用户的主目录（通常为 `/home/用户名`）。

选择正确的答案：

- **A. 切换到用户主目录**
- C. 返回先前目录：`cd -`
- D. 返回父目录：`cd ..`

7. **如果要列出一个目录下的所有文件需要使用命令行（ ）**

- **A. `ls -l`**：以长格式显示文件和目录的详细信息。
- **B. `ls -t`**：按修改时间排序，显示最近修改的文件。
- **C. `ls -a`**：显示所有文件，包括隐藏文件（以 `.` 开头的文件）。
- D. `ls -d`：仅显示目录本身，不列出目录中的内容。

8. **解压文件 linux.tar.gz 使用的命令是（ ）**

> `-z` 表示解压缩 `.gz` 文件，`-x` 表示解压，`-v` 表示详细模式，`-f` 指定文件名。

选择正确的答案：

- A. `tar -jxvf linux.tar.gz`
- B. `tar -jcvf linux.tar.gz`
- **C. `tar -zxvf linux.tar.gz`**
- D. `tar -zcvf linux.tar.gz`

**常用命令简述：**

- `rename`：批量重命名文件。
- `rm`：删除文件命令。
- **`mv`**：移动或更名现有的档案或目录。
- `cp`：复制文件或目录。
- `pwd`：用于显示当前工作目录的完整路径。

9. **切换用户登录的命令是（ ）**

选择正确的答案：

- A. `ps`：显示当前终端的进程。
- **B. `su`**
- C. `sudo`：允许用户以其他用户（通常是 root 用户）的权限执行命令。
- D. `change user`（此选项无效）。

10. 为了得到所有的命令行输入的参数，我们可以使用变量：

- **A、$@**
- B、0
- C、$!
- D、$#

11. 下面命令在 `/dev` 目录下创建一个字符设备节点：

- A、`mknod c 254 0 /dev/demo`
- B、`mknod b 254 0 /dev/demo`
- **C、`mknod /dev/demo c 254 0`**
- D、`mknod /dev/demo b 254 0`

12. **Linux 有三个查看文件的命令，若希望在查看文件内容过程中可以用光标上下移动，应使用**

- **`less` 命令**

> - `more` 命令：只能向下滚动，不支持光标自由移动
> - `less` 命令：支持上下移动光标查看文件内容

13. 信号量操作原语
    在Linux系统中，除赋初值外，对信号量仅能操作的两种原语是（ ）  
     A. 存操作、取操作  
     B. 读操作、写操作  
     C. P操作、V操作  
     D. 输入操作、输出操作

    **答案**： C. P操作、V操作

    > 信号量的操作原语为 `P`（等待/阻塞）和 `V`（发送/唤醒），用于实现进程间同步。

14. **Linux 命令行换行符**

- 在 Linux 系统中，在一行结束位置加上 **`\`**，表示未结束，下一行继续。

## 02.路径

1. 默认情况下，管理员创建一个用户时，会在 `/home` 目录下创建该用户的主目录。

Linux 系统的文件根据其功能分门别类地放置在相关的目录中。对于**系统全局配置文件**，应将其放在 `/etc` 目录中：

- `/etc`：存放系统全局配置文件。
- `/boot`：存放启动相关的文件。
- `/home`：存放用户的个人文件和设置。
- `/usr`：存放系统共享的只读数据，包括程序、库、文档等。
- `/sbin`：存放系统管理程序，通常是管理员使用的命令。**`init` 可执行文件通常存放在 `/sbin` 目录中**。
- `/root`：超级用户（root）的主目录。
- Linux 系统中，**普通用户**使用的命令通常保存在 `/bin` 目录中。
- `/dev`：存放外部设备文件，所有外部设备（如硬盘、光驱、终端等）通过设备文件来访问。
- `/mnt`：临时挂载外部设备（如磁盘、U盘）的目录。
- `/proc`：虚拟文件系统，存放内核和进程的相关信息。
- `/swap`：存放交换空间。
- `/proc/interrupts` 文件包含了有关系统中断的信息，包括每个 CPU 处理的中断次数、每个中断的来源（如网卡、磁盘等）等。查看网卡的中断的命令：`cat /proc/interrupts`。

2. 对于**所有用户只能读**的文件权限是 `444`：

- `777`：所有用户对文件都有读、写、执行权限。
- `444`：所有用户只能读取文件，不能写入或执行。
- `644`：文件所有者可以读写，其他用户只能读。
- `640`：文件所有者可以读写，所属用户组可以读，其他用户没有权限。

3. 关于 `/etc/fstab` 文件描述，正确的是：

- **A**：`/etc/fstab` 文件不仅可以描述 Linux 文件系统，还可以描述其他类型的文件系统，如 Windows、USB、CD-ROM 等。通过修改 `/etc/fstab` 文件，可以设置开机时自动挂载的文件系统。
- **B**：CD-ROM 和软盘不一定是自动加载的，取决于系统的配置和硬件支持。
- **C**：`/etc/fstab` 中描述的文件系统可以通过 `umount` 命令卸载。
- **D**：Linux 系统在启动时会参考 `/etc/fstab` 文件中列出的文件系统进行挂载。

**正确答案：** **D** — Linux 启动时按 `/etc/fstab` 文件描述内容加载文件系统。

4. 在 Linux 系统中，**将分区与目录相对应**的过程叫做 **挂载**，挂载点是该存储设备内容在文件系统中的显示位置。

- 使用 `mount` 命令可以手动挂载分区或设备，使用 `umount` 命令可以卸载它们。
- 在系统启动时，分区也可以通过配置文件 `/etc/fstab` 实现自动挂载。

> 关于 NFS 的挂载命令：
> Linux 支持网络文件系统（NFS），下列命令将远程服务器上的目录挂载到本地目录。假设远程服务器的 IP 为 `192.168.1.4`，挂载目录为 `/opt/sirnfs`，本地挂载点为 `/mnt`。
> `mount -t nfs 192.168.1.4:/opt/sirnfs /mnt`：该命令表示将远程服务器（IP 为 `192.168.1.4`）上的 `/opt/sirnfs` 目录挂载到本地的 `/mnt` 目录。`-t nfs` 指定挂载类型为 NFS。

以下选项中，哪一个是正确的？

- **A**：`mount nfs -t /mnt 192.168.1.4:/opt/sirnfs`：格式错误，挂载目录应在命令的最后。
- **B**：`mount -t nfs /mnt 192.168.1.4:/opt/sirnfs`：顺序错误，挂载目标应该是本地目录而非远程目录。
- **C**：`mount nfs -t 192.168.1.4:/opt/sirnfs /mnt`：格式错误，`-t nfs` 选项位置不对。

**正确答案：** **D** — `mount -t nfs 192.168.1.4:/opt/sirnfs /mnt`

5. `init` 进程是内核在完成核心引导以后加载的，它是系统所有进程的起点，进程号为 1，在执行过程中，首先会读取（ ）

- **A**：`/etc/init`
- **B**：`/etc/fstab`
- **C**：`/etc/inittab`
- **D**：`/etc/rc.sysinit`

**正确答案：** **C** — `/etc/inittab`  
这是传统的 Unix/Linux 系统中，`init` 进程读取的文件，其中定义了运行级别、启动过程等信息。`init` 会根据 `/etc/inittab` 文件中的配置启动其他进程。

6.  用命令 `ls -al` 列出下面的文件列表，问哪一个文件是 **目录文件**？

文件权限前缀：

- `-` 表示普通文件
- `d` 表示目录
- `l` 表示符号链接

- **A**：`-rw------- 2 hel-s users 56 Sep 09 11:05 folder`
- **B**：`-rw------- 2 hel-s users 56 Sep 09 11:05 goodbye`
- **C**：`drwx----- 1 hel users 1024 Sep 10 08:10 zhang`
- **D**：`lrwx----- 1 hel users 2024 Sep 12 08:12 cheng`

**正确答案：** **C** — `drwx----- 1 hel users 1024 Sep 10 08:10 zhang`  
`d` 表示这是一个目录文件。

7. 硬链接与符号链接

- **硬链接**（hard link）：多个文件名指向同一个文件数据块（i-node）。硬链接只能在同一个文件系统内创建，因为它们依赖于文件系统的 i-node 结构。硬链接通过文件系统中的 i-node 来定位文件的数据块，该 i-node 是与文件系统绑定的。

- **符号链接（symlink）**，也叫软链接：它通过路径指向目标文件，而不依赖于 i-node，因此可以跨越文件系统边界。

8. Shell 程序总是以什么符号作为第一行开头？

A. `#`（注释标记）  
B. `!`  
C. `#!`  
D. `!#`

**正确答案：C. `#!`**

> `#!`（shebang）用于指定脚本的解释器。

9. 某 shell 程序在运行时需要向脚本传递参数，为了得到所有命令行参数的个数，我们可以使用哪个变量？

A. `$*`  
B. `$@`  
C. `$#`  
D. `$?`

**正确答案：C. `$#`**

> `$#` 变量表示命令行参数的个数。

10. 启动 `init` 进程前，**不需要**经过以下哪个步骤？

A. 启动网络支持  
B. 检测内存  
C. 加载内核  
D. 加载文件系统

**正确答案：A. 启动网络支持**

> 启动网络支持通常是在 `init` 进程之后的步骤，不是启动 `init` 进程之前的必要步骤。

11. 已知 Linux 系统中的唯一一块硬盘是第一个 IDE 接口的 master 设备，该硬盘按顺序有 3 个主分区和一个扩展分区，这个扩展分区又划分了 3 个逻辑分区，则该硬盘上的第二个逻辑分区在 Linux 中的设备名称是？

A. `/dev/hda2`  
B. `/dev/hda2`  
C. `/dev/hda5`  
D. `/dev/hda6`

**正确答案：D. `/dev/hda6`**

> IDE硬盘 `/dev/hda` 的第一个扩展分区是 `/dev/hda5`，第二个逻辑分区是 `/dev/hda6`。

## 03.Linux基础

1. 在大多数 Linux 发行版本中，以下哪个属于块设备？

A. 串行口  
B. 硬盘  
C. 键盘  
D. 打印机

**正确答案：B. 硬盘**

> 硬盘是块设备，数据以块为单位进行读写。

2. Linux 文件权限共 10 位长度，分成四段，第三段表示的内容是？

A. 文件类型  
B. 文件所有者的权限  
C. 文件所有者所在组的权限  
D. 其他用户的权限

**正确答案：C. 文件所有者所在组的权限**

3. 以下提法中，属于 `ifconfig` 命令作用范围的是？

A. 加载网卡到内核中  
B. 配置网卡的 IP 地址  
C. 编译源程序  
D. 配置系统内核

**正确答案：B. 配置网卡的 IP 地址**

> ● A. 加载网卡到内核中：通常是通过 `modprobe` 或 `insmod` 命令完成的。  
> ● B. 配置网卡的 IP 地址：`ifconfig` 可以用来配置网络接口的 IP 地址、子网掩码等信息。这是 `ifconfig` 命令的常见用途之一。  
> ● C. 编译源程序：编译源程序通常使用 `gcc` 或类似工具，而不是 `ifconfig`。  
> ● D. 配置系统内核：`ifconfig` 主要用于配置网络接口，而不是配置整个系统内核。配置内核通常涉及修改内核参数或重编译内核。

4. 由于受到某种强干扰导致程序"跑飞"，ARM 处理器最有可能进入哪一种工作模式？

**未定义指令中止模式**

> 如果程序中包含无法识别的指令（可能是由于干扰修改了程序代码），则 ARM 处理器可能会进入 **未定义指令模式**。

5. 在 ARMv7 体系结构中，寄存器 R15 除了可以作为通用寄存器外，还可以作为什么？

**程序计数器**

> 当 R15 被用作程序计数器时，它会指示当前正在执行的指令的地址。程序计数器通常指向下一个待执行的指令。  
> 在 ARM 体系结构中，PC 的值在执行时会自动更新为下一条指令的地址。对于 ARM 指令集，PC 的值通常是当前执行指令地址加上 8（因为 ARM 是 32 位指令集，指令宽度是 4 字节，每条指令执行时会跳到下一条指令）。

6. 在下列 ARM 处理器的各种模式中，哪个模式有自己独立的 R8-R14 寄存器？

**快中断模式 (FIQ)**

> ARM 处理器在不同的工作模式下有不同的寄存器集合。具体来说，ARM 处理器的 **FIQ 模式** 有一组专用的寄存器 **R8-R14**，这些寄存器与其他模式（如用户模式、IRQ 模式、SVC 模式等）中的寄存器是独立的。

### Shell

1. **Shell 程序**（通常是 `.sh` 文件或脚本）是纯文本文件，不需要使用 **gcc** 编译器编译。Shell 脚本是一种 **解释性语言**，也就是说它是由操作系统的 Shell 解释器（如 `bash`、`sh`、`zsh` 等）直接执行的，而不是通过编译器编译成机器代码。

2. 在 Shell 脚本中，命令后面的参数依次用 `$1`、`$2`、`$3` 等表示，称为 **位置参数**。

3. 在 Shell 程序中使用 **echo 命令打印变量** 时：

- 使用 **双引号** 时，变量会被展开，显示变量的值。
- 使用 **单引号** 时，变量不会被展开，直接打印 `$name` 这样的字面值。

### GCC 编译

在 **预处理** 阶段，GCC 主要处理 **宏定义**、**头文件的包含**（通过 `#include`）、**条件编译指令**（如 `#ifdef`）等。GCC 会将代码中包含的头文件等内容展开，为后续的编译阶段做准备。

在 **编译阶段**，GCC 会将源代码（`.c` 文件）转换为汇编语言（`.s` 文件）。汇编阶段会将 `.s` 文件转换为目标文件（通常是 `.o` 或 `.obj` 格式），这一步涉及到机器代码的生成。

GCC 编译选项

1. **-g**: **在可执行程序中包含调试信息。**
2. **-c: 只进行编译并生成目标文件（.o 文件），不进行链接。**
   > 3. **-o**: 用来指定输出文件的名称。
   > 4. **-v**: 显示详细的编译信息。
   > 5. **-S**: 会生成汇编代码文件（.s）。
   > 6. **-E**: 仅进行预处理，不进行编译。
   > 7. **-w**: 抑制编译器的警告信息。

题目

1.  在 Linux 使用 `GCC` 编译器时，有如下命令：

```bash
gcc -g test.c -o test
```

其中参数 `-g` 的作用是 ( )

- A. 生成目标文件 `test.o`
- B. 生成汇编文件 `test.s`
- C. 进行预编译
- **D. 包含调试信息**

> `-g` 选项用于生成包含调试信息的可执行文件，以便 `gdb` 调试程序时使用。

2. 下面哪项关于 GCC 编译过程的说法是**错误**的：

- A、编译阶段 GCC 要检查代码的规范性、是否有语法错误等，以确定代码实际要做的工作
- B、汇编阶段是把编译阶段生成的 `.s` 文件转成目标文件
- C、预处理阶段，GCC 编译器将代码中包含的头文件编译进来
- **D、GCC 在编译时默认使用静态库**

3. GCC 编译器的编译过程中涉及到函数库使用的是：

- A、预处理阶段
- B、编译阶段
- C、汇编阶段
- **D、链接阶段**

4. `-fPIC` 的作用是告诉 GCC **生成位置无关的代码**，并不是**生成与位置相关的代码**。

### 文件描述符

文件描述符通常是一个 **整数**，代表一个指向打开文件的索引，操作系统用它来标识和管理打开的文件。

> 标准文件描述符
>
> - **STDIN_FILENO**: 标准输入（文件描述符为 0）。
> - **STDOUT_FILENO**: 标准输出（文件描述符为 1）。
> - **STDERR_FILENO**: 标准错误输出（文件描述符为 2）。

1. **文件描述符的数据类型是**？

   - **A**: `int`
   - **B**: `float`
   - **C**: `char`
   - **D**: `double`  
     **答案**: A. `int`

2. **当一个进程终止时，它所有已打开的文件会被操作系统自动关闭。**

3. **一般情况下，STDIN_FILENO 对应的文件描述符为**？

   - **A**: 1
   - **B**: 2
   - **C**: 0
   - **D**: -1  
     **答案**: C. 0

4. **一般情况下，STDOUT_FILENO 对应的文件描述符为**？

   - **A**: 0
   - **B**: 1
   - **C**: 2
   - **D**: -1  
     **答案**: B. 1

5. **不带缓存的文件 I/O 操作函数不包括**？

   - **A**: `fopen`
   - **B**: `open`
   - **C**: `read`
   - **D**: `write`  
     **答案**: A. `fopen`

6. `lseek` 参数问题
   下面（ ）不是 `lseek` 第三个参数的取值  
   A. SEEK_SET  
   B. SEEK_CUR  
   C. SEEK_NOW  
   D. SEEK_END

**答案**： C. SEEK_NOW

> `lseek` 第三个参数合法值为 `SEEK_SET`（文件头）、`SEEK_CUR`（当前位置）、`SEEK_END`（文件尾）。

7. 不带缓存的 I/O 流
   **题目**： 下列（ ）是不带缓存的  
   A. stdin  
   B. stdout  
   C. stderr  
   D. 以上都不是

**答案**： C. stderr

> 标准错误流 `stderr` 默认无缓冲，`stdin` 和 `stdout` 通常为行缓冲或全缓冲。

8. 当流缓冲涉及一个终端时，标准 I/O 典型地使用：

- A、全缓冲
- **B、行缓冲**
- C、无缓冲
- D、帧缓冲

9. 在用命令 `ls -l` 查看文件属性时，字符设备文件类型的标志是：

- **A、c**
- B、b
- C、s
- D、l

10. `open()` 创建新文件时，使用 ( ) 参数，则当该文件存在时返回错误信息：

- A、O_CREAT
- **B、O_EXCL**
- C、O_TRUNC
- D、O_NOCTTY

11. 一个进程启动时打开 3 个文件中不包括：

- A、标准输入
- B、标准输出
- C、标准出错处理
- \*\*D、系统日志服务

### 进程

**进程** 是操作系统中进行资源管理和调度的基本单位，它代表了程序在执行中的一个实例。每个进程都拥有独立的地址空间、执行状态、资源和数据等，并且是操作系统分配资源和调度任务的基本单位。

#### 1. 进程与程序的区别

- **程序**：程序是静态的，它只是存储在磁盘上的一组指令。
- **进程**：进程是动态的，程序在执行时被加载到内存中，变成一个进程。程序在没有执行时只是一个静态文件，而进程则是程序在内存中的执行实例。

#### 2. 进程生命周期

进程的生命周期通常包括以下几个阶段：

- **创建**：进程由操作系统创建，通常是由用户执行某个程序时，操作系统会分配必要的资源并创建一个新的进程。
- **就绪**：进程已经加载到内存并准备好执行，但由于 CPU 资源的限制，它可能需要等待操作系统调度。
- **运行**：操作系统将 CPU 分配给进程，进程开始执行其任务。
- **等待**：进程可能因为等待某些资源（如 I/O 操作）而进入等待状态。
- **终止**：当进程执行完毕或发生异常时，操作系统将终止该进程并释放资源。

#### 3. 进程之间的通信（IPC）

由于进程之间的内存空间是 **独立** 的，进程之间无法直接共享数据，它们需要通过某些机制来进行通信，这些机制称为进程间通信（IPC，Inter-Process Communication）。常见的 IPC 方法包括：

- **管道（Pipe）**：用于同一计算机内的进程间通信。
- **消息队列（Message Queue）**
- **共享内存（Shared Memory）**
- **信号量（Semaphore）**
- **套接字（Socket）**：实现不同计算机间进程通信。

> **注意**：进程之间不可以直接通过地址访问进行相互通信。

###### 共享内存

- 共享内存是直接在物理内存中分配的，不需要在硬盘上建立索引。共享内存是一种非常高效的进程间通信方式，因为它 **允许多个进程直接访问同一块给定的内存区域**，从而避免了数据复制的开销。不同于消息队列、管道等机制，数据不需要在进程间传递或复制。

共享内存的实现通常包括两个步骤：

1. **创建或打开共享内存**：使用系统调用（如 `shmget` 或 `mmap`）创建一个共享内存段或打开一个已存在的共享内存段。
2. **映射共享内存**：将共享内存映射到进程的地址空间，通常通过 `shmat` 或 `mmap` 实现，这样进程可以直接访问共享内存中的数据。

###### 信号量

信号量不仅用于进程间同步，还可用于互斥。**二值信号量**（也称为互斥量）确保同一时刻只有一个进程能访问某个共享资源。

1. 常用来进行 **多任务同步** 的机制是 ( )

- A. 管道
- **B. 信号量**
- C. 信号
- D. 共享内存

> **解析**：信号量是常用的多任务同步机制，尤其在并发控制中。

###### 管道

管道用于进程间的通信，分为匿名管道和命名管道（FIFO）。匿名管道通常用于**单向通信**，而命名管道（FIFO）可用于**双向通信**。

- **匿名管道**：通常采用**半双工**方式，且有缓冲区管理。管道在读写过程中可能会发生阻塞。
- **命名管道（FIFO）**：通过文件系统提供一个持久化的通信通道，允许多个进程对其进行读写。

> 管道的容量通常受到操作系统内核的限制，内核会设置一个固定的缓冲区大小。如果缓冲区满了，写操作会被阻塞，直到管道有足够空间。

管道的类型

- **匿名管道**：通常是单向的，意味着一个管道只能在一个方向上传输数据。它采用 **半双工** 方式进行通信，由 Linux 内核管理一个缓冲区。
- **命名管道**（FIFO，先进先出队列）：可以用于不同进程间的通信，它是一个双向通信通道。

管道的容量通常受到操作系统内核的限制，内核会设置一个固定的缓冲区大小用于存放管道中的数据。如果缓冲区已满，写操作将被阻塞，直到有空间可用。如果管道中没有数据可读，读操作会被阻塞，直到有数据可读。

1. 在 Linux 系统中，对于“`ls -l | more`”操作，命令解释程序运行进程 `ls` 和 `more` 时使用了以下通信方式：

- A、信号
- **B、管道**
- C、套接字
- D、消息队列

2. System V IPC对象
   **题目**： 下列不属于 System V IPC对象的是（ ）  
   A. **管道**  
   B. 共享内存  
   C. 消息队列  
   D. 信号量

**答案**： A. 管道

> System V IPC 包括共享内存、消息队列、信号量，管道是 UNIX 早期 IPC 机制，不属 System V IPC。

3. 下列对无名管道描述错误的是：

- A、半双工的通信模式
- **B、可以使用 `lseek()` 函数**
- C、有固定的读端和写端
- D、只存在于内存中

###### 其他

1. 下面关于 linux 进程通信的描述是正确的：

- A、信号量是进程间通信机制中唯一同步机制
- B、消息队列读取函数 `msgrcv()` 只能读取队头的消息
- **C、共享内存的实现分为两个步骤：创建或打开共享内存和映射共享内存**
- D、信号量可以解决进程间的同步问题，但不能解决进程间的互斥问题

2. Linux 支持的三种**进程间通信**（IPC）机制是：

- **信号量（Semaphore）**
- **消息队列（Message Queue）**
- **共享内存（Shared Memory）**

3.  **用于同一主机内部进程间通信的套接字应使用**

- **`AF_UNIX` 协议族**

4. 不可屏蔽信号
   **题目**： 不能被用户进程屏蔽的信号是（ ）  
    A. SIGILL  
    B. SIGSTOP  
    C. SIGINT  
    D. SIGQUIT  
    **答案**： B. SIGSTOP

   > **SIGSTOP`和`SIGKILL**` 是系统级信号，无法被阻塞、忽略或自定义。

5. **Linux 启动并加载可执行文件的流程**
   **以下是在 Linux 系统中启动并加载可执行目标文件过程中，Shell 命令行解释程序所做的部分操作**
   **正确顺序：** `④ → ① → ② → ③`
   ④ 读入命令（可执行文件名）及参数
   ① 构造 `argv` 和 `envp`
   ② 调用 `fork()` 系统调用函数
   ③ 调用 `execve()` 系统调用函数

#### 4. 进程间通信的阻塞

- 如果管道中的缓冲区已满，写操作将被阻塞，直到有空间。
- 如果管道中没有数据可读，读操作会被阻塞，直到有数据可读。

#### 5. 进程控制相关常用函数

- **`fork()`**：创建一个新进程（通常是父进程调用它来创建子进程）。
- **`exec()`**：加载并执行一个程序。
- **`wait()`**：父进程等待子进程结束。
- **`exit()`**：终止进程的执行。

1. `fork()` 函数

`fork()` 函数用于创建一个新的进程。在 `fork()` 被调用时，系统会创建一个新的进程（子进程），子进程是通过复制父进程的所有资源（包括内存、文件描述符等）来创建的。这个新的子进程将会有一个独立的进程ID（PID）。

`fork()` 函数执行一次返回两个值：

- **在父进程中**，`fork()` 返回的是子进程的进程ID（PID），一个大于 0 的值。
- **在子进程中**，`fork()` 返回的是 0。

  题目：**`fork()` 函数的返回值不可能是**？

  - **A**: 2
  - **B**: 0
  - **C**: -1
  - **D**: 1  
    **答案**:D

- Linux 操作系统中**创建一个新进程的唯一方法是使用 `fork()`**。（**对**）

2. `execvp` 与 `execl`

`execvp` 是一个系统调用，用于**替换当前进程的镜像**。执行 `execvp` 后，进程 P1 的代码、数据等将被程序 P2 的内容替换，P1 将继续执行 P2 的代码。**P1 会变成 P2**，P2 执行结束后会终止整个进程。

- `execvp` 的执行会替换掉父进程 P1 的代码和数据，父进程会变成子进程 P2。

`execl()` 用于加载新的程序并替换当前进程的映像。执行 `execl()` 后，原进程的代码、数据、堆栈等内容都会被新程序替换，**除了进程号外，原进程的所有内容都会消失**。

3. `wait()` 与 `waitpid()`

`wait()` 和 `waitpid()` 都是用来让父进程等待子进程的结束，它们的差异主要体现在阻塞行为和提供的选项上。

- **`wait()`**：使父进程阻塞，直到一个子进程退出或收到一个信号。如果父进程没有子进程或者它的子进程已经结束，`wait()` 会返回 `-1`。
- **`waitpid()`**：支持作业控制，允许父进程等待特定子进程的退出，提供非阻塞版本的功能，并能够更精确地控制等待特定子进程。
- `waitpid(pid, &status, 0)`
- `pid` 是特定子进程的进程号，`0` 表示**阻塞等待**，直到指定的子进程 `pid` 退出。
- 这是标准的用法，它会等待指定的子进程的退出状态，直到该进程退出。
- **它会阻塞，直到进程 `pid` 完成并返回退出状态。**

`waitpid()` 的返回值为 0 时表示的含义：

- **D**：使用选项 `WNOHANG`，且没有子进程退出。

题目：进程调用函数 `wait()` 将被阻塞，直到：

- A、用户按任意键
- B、收到时钟信号
- C、子进程被创建
- **D、子进程结束**

4. `exit()` 与 `_exit()`

- **`exit()`**：会清理程序的 I/O 缓冲区，并在退出之前执行标准库的清理工作（如关闭文件、刷新缓冲区、调用注册的 `atexit()` 函数等）。它确保缓冲区中的数据被写入到文件中。
- **`_exit()`**：直接终止进程，不会进行缓冲区的清理，也不会执行其他清理工作。它会清理进程的资源（如文件描述符和内存空间），但**不会刷新缓冲区**。

**想保证数据的完整性，必须使用 `exit()` 函数。**

5. `fread()` 函数

- `fread()` 返回值的含义是：
- **读取的对象数**。
- 用于从文件中读取数据。

6.  `setsid()` 函数

- `setsid()` 函数用于创建一个新的会话，并使调用它的进程成为新会话的领导进程。
  它有以下功能：
- 创建新的会话。
- 创建新的进程组。
- 使调用它的**进程**脱离控制终端。
- 使调用它的进程成为该进程组的组长。

7. 使用 `fopen` 函数时，必需包含的头文件文件为 ( )

- **A. `stdio.h`**
- B. `stdlib.h`
- C. `errno.h`
- D. `fcntl.h`

> `fopen` 函数用于打开文件，必须包含 `stdio.h` 头文件。

#### 6.进程控制与系统调用

###### 资源独立性

- **子进程的内存空间与父进程独立**，父进程和子进程各自有独立的堆、栈和数据段。
- 子进程复制了父进程的内容，因此父进程和子进程从 `fork()` 调用语句的下一条开始执行。

###### 守护进程（Daemon Process）

守护进程是指在操作系统中，在后台运行的、通常**不与任何用户直接交互**的进程。守护进程通常是系统服务或应用程序的一部分，负责提供长期运行的服务，或者执行某些定期任务。它们的特点是：

- **不依赖终端**，运行在后台。
- **通常在系统启动时启动**，并持续运行直到系统关闭。

**守护进程创建步骤**:

1. **创建子进程，使父进程退出**。
2. 在子进程中创建新的会话。
3. 改变当前工作目录为根目录，避免占用任何文件系统。
4. 关闭所有不需要的文件描述符。

**syslog 守护进程**
**补充说明**：  
在 Linux 中，`syslog` 服务由 **rsyslogd**（现代系统）或 **syslogd**（传统系统）守护进程管理，负责记录系统和应用程序的日志信息。

###### 僵尸进程（Zombie Process）

- **僵尸进程是由于父进程未回收子进程造成的。**
- 子进程执行完毕后，如果父进程没有及时回收其状态信息（调用 `wait()` 或 `waitpid()` 处理），子进程的进程表项不会被清理，导致其成为僵尸进程。

### Vim 编辑器命令

| 命令  | 作用                     |
| ----- | ------------------------ |
| `:q`  | 退出 Vim（无未保存修改） |
| `:q!` | 强制退出，不保存修改     |
| `:wq` | 保存并退出               |
| `xx`  | 删除光标所在的两个字符   |
| `yy`  | 复制当前行               |
| `cc`  | 删除当前行并进入插入模式 |
| `dd`  | 删除当前行               |

### Makefile

#### 1.Makefile 变量

| 变量 | 作用                       |
| ---- | -------------------------- |
| `$@` | 当前规则的目标文件名       |
| `$*` | 目标文件名（不包含扩展名） |
| `$<` | **第一个依赖文件**         |
| `$#` | 依赖文件数量               |

#### 2.Makefile 规则与选项

1. 在Linux下Makefile文件中，

- **A.** `$@`

  > 这个变量表示 **当前规则的目标**（即右边的文件名）。在一个规则中，`$@` 是规则中第一个目标文件的名字。

- **B.** `$*`

  > 这个变量表示 **当前目标文件的文件名**，不包含扩展名。它通常用于模式规则中，例如在 `.c` 文件编译成 `.o` 文件的规则中，`$*` 会代表没有扩展名的文件名部分。

- **C.** `$<`

> 表示 **第一个依赖文件**（即规则右边列出的第一个文件）。在大多数情况下，`$<` 用于表示依赖文件中的第一个文件，特别是在编译规则中，例如 `.c` 文件编译为 `.o` 文件时，`$<` 会表示 `.c` 文件。

- **D.** $#`

> 这个变量表示 **当前规则的依赖文件数目**。它返回一个整数，表示有多少个依赖文件。

2. 正确的是( )

- **A.** `"-Cdir"表示读入指定目录dir下的makefile`  
   这是正确的。`-C` 是 `make` 命令的一个选项，用于指定切换到某个目录并在该目录下执行 Makefile。例如，`make -C /path/to/dir` 会使 `make` 进入目录 `/path/to/dir` 并执行该目录下的 Makefile。
- **B.** `makefile变量名可以包含"#”字符串`  
   这个选项是错误的。Makefile 中的变量名不能包含 `#` 字符，因为 `#` 是注释的开始符号。在 Makefile 中，`#` 后面的内容会被视为注释，变量名中包含 `#` 会导致语法错误。
- **C.** 创建目标体的命令必须以制表符Tab开头`  
   这是正确的。在 Makefile 中，目标的命令行必须以制表符（Tab）而不是空格开头。如果使用空格，会导致语法错误。
- **D.** makefile变量对大小写敏感  
   这是正确的。在 Makefile 中，变量名是区分大小写的。即 `FOO` 和 `foo` 是两个不同的变量。

3. 自动编译工具
   **题目**： 一般可以用（ ）工具实现自动编译  
   A. gcc  
   B. gdb  
   C. make  
   D. vi

**答案**： C. make

> `make` 工具通过读取 `Makefile` 实现自动化编译，`gcc` 是编译器，`gdb` 是调试器，`vi` 是文本编辑器。

4. 在 `Makefile` 文件中的命令必须要以 ( ) 开始

- **A. Tab 键**
- B. `#` 号键
- C. 空格键
- D. `&` 键

> 在 `Makefile` 中，命令行必须以 Tab 键开头，空格键无效。

5. **内核源码编译前的清理**
   **以下关于内核源码编译前的清理，错误的是**

- A. 通常第一次编译内核时使用 `make mrproper` 命令进行清理
- B. `make clean` 删除内核源码中的中间文件，不删除配置文件和编译支持的扩展模块
- **C. `make mrproper` 删除内核源码中的中间文件、配置文件，不删除备份文件**
- D. `make distclean` 删除源码中的各种文件、备份和补丁

> `make mrproper` **会删除备份文件**

6.  **编译 Linux 设备树**

- **使用 `make dtbs` 命令编译 Linux 内核设备树文件**。

#### 设备驱动开发

1.  下列( )结构存储内核驱动模块提供的对设备进行操作的函数指针

- A. `file`
- B. `inode`
- C. `devicde_struct`
- **D. `file_operations`**

> `file_operations` 结构体用于存储内核驱动模块中对设备的操作函数。

2.  Linux 驱动程序运行在 ( )

- **A. 内核空间**
- B. 用户空间
- C. 内核空间和用户空间
- D. 以上都不是

> Linux 设备驱动程序运行在内核空间，普通应用程序运行在用户空间。

3. 在设备驱动编程中内核函数 ( ) 把数据从用户空间拷贝至内核空间：

- A、put_user()
- B、get_user()
- C、copy_to_user()
- **D、copy_from_user()**

4. 为了通过 `devfs` 文件系统访问设备，需要创建设备文件，那么创建设备文件的指令是 ( )

- A. `mkdir`
- B. `touch`
- C. `make`
- **D. `mknod`**

5. Linux 系统中，内核以（ ）区分设备：

- A、设备节点名
- B、设备节点号
- C、设备名称
- **D、设备号**

6. 嵌入式软件开发中，**驱动程序** 组件负责处理输入/输出操作。

#### Linux 内存管理

- **1**、在关于内存分配函数的描述中，下面是 **错误** 的：
  - A. `kmalloc` 函数返回物理地址
  - **B. `kmalloc` 函数申请空间无大小限制**
  - C. `kmalloc` 函数开辟的内存基于内存地址
  - D. `kmalloc` 函数不会对所获取的内存空间清零

### 终端软件（minicom）

- `minicom` 的功能是 **超级终端**
- 配置 `minicom` 软件时，**数据位** 通常设置为 \*\*8 位

**Linux 设备管理**

- 在 Linux 系统中，**串口设备的设备名一般为 `ttyS0`**。
- 在 Linux 系统下，第二个 IDE 通道的硬盘（从盘）被标识为 **hdb**。

| 标识符  | 设备说明                                   |
| ------- | ------------------------------------------ |
| **hda** | 主控制器通道上的主设备（Primary Master）   |
| **hdb** | 主控制器通道上的从设备（Primary Slave）    |
| **hdc** | 副控制器通道上的主设备（Secondary Master） |
| **hdd** | 副控制器通道上的从设备（Secondary Slave）  |

### 共享库管理

1. **`ldd` 命令的作用**

- `ldd` 命令用于列出共享库文件的依赖关系。
- **对于一个 `.so` 文件，使用 `ldd` 可以查看它依赖的其他库文件。**

### 二进制工具

**以下工具用于目标格式转换**

- A. `strip`
- B. `objdump`
- C. `nm`
- **D. `objcopy`**

> `objcopy` **用于转换和操作目标文件格式**，例如从 ELF 转换为可执行文件，或从可执行文件转换为目标文件等。

### ELF 文件格式

1. **ELF 可重定位与可执行文件**

**以下关于 ELF 可重定位和可执行两种目标文件格式的比较，错误的是**

- A. 可重定位目标文件中有 `.rel.text` 和 `.rel.data`，而在可执行目标文件中则没有
- **B. 可重定位目标文件中有初始化程序段 `.init` 节，而在可执行目标文件中则没有**
- C. 可执行目标文件中有程序头表（段头表），而在可重定位目标文件中则没有
- D. 可执行目标文件的 ELF 头中有具体程序入口地址，而在可重定位目标文件中则为 `0`

> `.init` 节存在于 **可执行目标文件** 中，用于在程序开始执行时运行一些初始化代码。  
> **可重定位目标文件没有 `.init` 节**，因此 B 选项错误。

**以下关于可重定位目标文件的叙述中，错误的是**

- **A. 在 `.data` 节中包含相应模块内所有变量的初始值**
- B. 在 `.text` 节中包含相应模块内所有机器代码
- C. 在 `.rodata` 节中包含相应模块内所有只读数据
- D. 在 `.rel.text` 节和 `.rel.data` 节中包含相应模块内所有可重定位信息

  **以下关于 ELF 目标文件格式的叙述中，错误的是**

- A. 可执行目标文件是 ELF 格式的执行视图，由不同的段组成
- **B. 可重定位和可执行两种目标文件中的数据都是二进制表示的补码形式**
- C. 可重定位目标文件是 ELF 格式的链接视图，由不同的节组成
- D. 可重定位和可执行两种目标文件中的代码都是二进制表示的指令形式

> **补码** 主要用于整数类型（特别是有符号整数）。

2. **交叉编译**
   **通常所讲的交叉编译是指**

   > 在 **x86 架构** 的宿主机上 **生成适用于 ARM 架构** 的 **ELF** 格式可执行代码。

3. **标准 C 库**
   **在 Linux 中，以下库文件属于标准 C 库**（选项C）

- A. `libstdc++.a`
- B. `libc.a`（标准 C 库的静态链接库文件）
- **C. `libc.so`**（**标准 C 库的共享库文件（动态链接库）**）
- D. `libstdc++.so`

## 04.Bootloader 和文件系统

1. 如果 BootLoader、内核、启动参数以及其他的系统映像四部分在固态存储设备上分别独立存放，则比较合理的存储结构的分配顺序应当是 ( )

- A. 文件系统、启动参数、内核、Bootloader
- B. 启动参数、Bootloader、内核、文件系统
- C. Bootloader、内核、启动参数、文件系统
- **D. Bootloader、启动参数、内核、文件系统**

> 合理的顺序是 Bootloader（负责启动）、启动参数、内核（负责加载系统）、文件系统（存储文件和应用程序）。

2. 在使用 `ln` 建立链接时，为了跨越不同的文件系统，需要使用 ( )

- A. 普通链接
- B. 硬链接
- C. 特殊链接
- **D. 软链接**

> 软链接（符号链接）可以跨文件系统，而硬链接不可以。

3. `BootLoader` 的 `stage2` 通常使用 `C` 语言实现，以完成复杂功能，并增加可读性和可移植性。以下哪一步骤属于 `stage2` 的内容？ ( )

- A. 为加载 `BootLoader` 的 `stage2` 准备 `RAM` 空间
- B. 设置好堆栈
- C. 硬件设备初始化
- **D. 将 `kernel` 映像和根文件系统映像从 `flash` 读到 `RAM` 空间中**

> `BootLoader` 的 `stage2` 负责加载内核和根文件系统，并准备启动操作系统。

4. 下列哪些文件系统可以运行在 NAND flash 上，并具**只读**特性：

- A、yaffs2
- B、jffs2
- **C、cramfs**
- D、tmpfs

5. 在 Linux 文件系统中，文件在外存的物理地址存放在 **i 节点（inode）** 中。

> 在 Linux 内核中，`inode` 和 `file` 数据结构的主要区别是：
>
> - `inode` 在**文件建立时产生**，存放于磁盘。
> - `file` 在**文件打开时才建立**，存放于内存。

## 05.Linux网络编程

1. 在 Linux 网络编程中，函数 `bind()` 调用是用于 ( )

- **A. 为 `socket` 分配地址**
- B. 客户端与服务器连接
- C. 接收 `socket` 上的连接
- D. 监听 `socket` 上的连接

> `bind()` 用于将一个地址（如IP地址和端口号）与 `socket` 关联起来，通常在服务器端使用。

2. 下列提法中，属于 `ifconfig` 命令作用范围的是 ( )

- A. 编译源程序
- **B. 配置网卡的 IP 地址**
- C. 配置系统内核
- D. 加载网卡到内核中

> ifconfig 是用于配置和管理网络接口的命令，通常用于设置 IP 地址等。

3. 在关于 `TCP/UDP` 的描述中，下面 ( ) 是错误的

- A. `TCP` 数据传输实现了从一个应用程序到另一个应用程序的数据传递
- B. `TCP` 对话通过三次握手来完成初始化
- **C. `UDP` 即用户数据报协议是一种面向连接的协议**
- D. 一个 `UDP` 应用可同时作为应用的客户或服务器方

4. `TCP/IP` 协议模型中不包括 ( )

- **A. 物理层**
- B. 网络接口层
- C. 网络层
- D. 传输层

5.  **要对 IP 协议直接访问，必须使用** **原始 (Raw) 套接字**。
6.  - **网络层传输的数据单位为** `分组`

- **网络字节序采用** `Big endian（大端字节序）`
  > 高位字节存储在低地址位置，低位字节存储在高地址位置。

7. **SSH 远程连接**

- **SSH 默认使用端口号 22**。

8. 字节序转换
   为了解决在不同体系结构的主机之间进行数据传递可能会造成歧义的问题，以下函数常用于发送端和接收端对双字节或者四字节数据类型进行**字节序转换**：

- A. (struct sockaddr\*)&(struct sockaddr in类型参数)
- B. inet_addr() / inet_aton() / inet_pton
- **C. htons() / htonl() / ntohs() / ntohl()**
- D. gethostbyname() / gethostbyaddr()

9. **`AF_UNIX`**（也称 `AF_LOCAL`）是 Unix 域套接字（Unix Domain Socket）的协议族，用于**同一主机内的进程间通信**。它允许不同进程之间传输数据，但不需要通过网络协议栈。
10. `ping` 命令通过 **ICMP** 协议来实现。

###### 套接字（Socket）编程

**在 Linux 网络编程中，`socket()` 函数是客户端、服务端所必须调用的。**

> `socket()` 函数用于创建一个新的通信端点，返回一个套接字描述符，之后客户端和服务端可以通过该套接字进行数据交换。

- **服务器端**

  - `bind()`：绑定 IP 地址和端口
  - `listen()`：监听连接
  - `accept()`：接受客户端请求，并生成新的套接字

- **客户端**
  - `connect()`：用于发起与服务器建立连接
  - `sendto()`：用于发送数据报

1.  常见的 socket 类型中不包括：

- A、SOCK_STREAM
- B、SOCK_DGRAM
- **C、SOCK_DTRAN**
- D、SOCK_RAW

2.  **下列套接字函数不能用于客户端程序**：

- A. `socket()`
- B. `send()`
- **C. `accept()`**
- D. `connect()`

3. **以下关于 Socket 的说法，错误的是**

- A. Socket 用于描述 IP 地址和端口，是一个通信链的句柄
- **B. Socket 通信必须建立连接**
- C. Socket 客户端的端口是不固定的
- D. Socket 服务端的端口是固定的

> **UDP 采用无连接方式，不需要建立连接，因此 B 选项错误。**  
> 客户端端口通常由操作系统动态分配，而服务端端口通常是固定的。

数据报套接字（UDP）

1. **要建立数据报套接字，在 `socket()` 函数中需要使用的参数是**

- **A. `SOCK_DGRAM`**
- B. `SOCK_STREAM`
- C. `SOCK_RAM`
- D. `SOCK_PACKET`

2.  **使用数据报套接字**进行网络通信的**应用层协议**是：

- A. FTP
- B. POP3
- C. PPP
- **D. SNMP**
  > SNMP (Simple Network Management Protocol) 是一种应用层协议，主要用于网络设备（如路由器、交换机、服务器等）的监控和管理。  
  > SNMP **使用 UDP** 作为传输层协议，适用于对实时性要求高、但容忍丢包的场合。

## 06.Qt开发

1.  信号与槽机制
    在 Qt 编程中，可以把信号（signal）和槽（slot）连接起来的函数是 ( )

- **A. `connect()`**

  > Qt 通过 `connect()` 函数连接信号与槽，实现事件驱动编程。

- 在 Qt 中，声明 **信号和槽函数** 时，它们的返回类型均为 **void**
- 在 Qt 信号与槽机制中，**发射信号** 的关键字是 **emit**。

1. Qt/Embedded 的底层图形引擎基于以下哪种接口技术 ( )

- A. `IAL`
- **B. `framebuffer`**
- C. `GFX`
- D. `GAL`

3. 在 Qt 编程中，main 函数中首先必须定义的一个类是：

- A、Qwidget
- **B、QApplication**
- C、Form1
- D、Qlabel

**4**. 在嵌入式Linux开发中，设备树 (Device Tree) 的主要作用是：

- **描述硬件信息**
  **嵌入式软件开发** 所采用的编译过程为 **交叉编译**。

**5**、`compatible = "example,device";`：指定硬件设备兼容的驱动程序标识符，操作系统根据这个信息来选择合适的驱动程序。

6. Qt 中，`QObject` 是整个 Qt 对象模型的核心，其中 **不属于** `QObject` 的职责：

- **A. 信号和槽机制**
- B. 内省
- C. 内存管理
- D. 事件处理机制

7. 用 Qt 的 Designer 可以用来设计图形界面窗口，其保存的文件扩展名是：**.ui**
8. 使用 **元对象编译器 (MOC)** 时，自定义类的头文件需要加上 **Q_OBJECT** 宏，并在 `gmake` 生成 `Makefile` 后，`make` 过程会自动调用 `moc` 处理信号与槽。

9. 在 Qt 中创建对话框：

- `show()` 显示的是 **非模式** 对话框。
- `exec()` 显示的是 **模式** 对话框。

10. - `QWidget` 本身可以作为应用程序中的一个普通窗口部件，但不能直接作为**主窗口**。**`QMainWindow`** 类通常用于创建应用程序的主窗口。
11. 在 Qt 中，**使用 `parent` 属性** 在 QML 中访问父组件。

---

## 07.SQLite 数据库

##### SQLite 数据类型

- `INTEGER`（或 `int`）
- `REAL`（浮点数）
- `TEXT`（文本）
- `BLOB`（二进制数据）

- **1**、下面操作与 SQLite **真正的数据存储和读取、写入文件无关**：

  - **A. 查询操作**
  - B. 删除操作
  - C. 更新操作
  - D. 创建操作

- **2**、以下对于 SQLite 数据库的描述，**错误** 的是：

  - A. SQLite 是一个轻量级的数据库。
  - **B. SQLite 是对象类型的数据库**。
  - C. SQLite 在存储和检索大量数据方面非常有效。
  - D. SQLite 数据库放在 **本地**，比网络数据访问更快更便捷。

- **3. ACID** 是数据库事务的重要特性，**不属于 ACID** 的是：

  - A. 原子性 (Atomicity)
  - B. 一致性 (Consistency)
  - **C. 关联性**
  - D. 持久性 (Durability)

- **4** 、在 SQLite 的 C API 中，用于 **获取数据库查询操作结果** 的接口函数是：
  - **`sqlite3_get_table()`**

## 其他

**双缓冲技术** 解决了图形图像处理中 **闪烁** 现象。

## END

> 文 / CLZZ, 2025.1
>
> 文 / [LiubGlnaHQ](https://github.com/LiubGlnaHQ) 2025.03.19
