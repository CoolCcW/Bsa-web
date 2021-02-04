module.exports = {
    // baseUrl�� Vue CLI 3.3 �������ã���ʹ��publicPath
    // Ĭ������£�Vue CLI ��������Ӧ���Ǳ�������һ�������ĸ�·���ϣ����� https://www.my-app.com/��
    // ���Ӧ�ñ�������һ����·���ϣ������Ҫ�����ѡ��ָ�������·�������磬������Ӧ�ñ������� https://www.my-app.com/my-app/�������� publicPath Ϊ /my-app/��
    publicPath:
        process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
    // ������ vue-cli-service build ʱ���ɵ��������������ļ���Ŀ¼��
    // ע��Ŀ��Ŀ¼�ڹ���֮ǰ�ᱻ��� (����ʱ���� --no-clean �ɹرո���Ϊ)��
    // Ĭ��ֵ'dist'
    outputDir: "my-app",
    // �������ɵľ�̬��Դ (js��css��img��fonts) ��Ŀ¼(�����outputDirĿ¼)��
    // Ĭ��ֵ''
    assetsDir: "assets",
    //ָ�����ɵ� index.html �����·�� (����� outputDir)��Ҳ������һ������·����
    // Ĭ��ֵ'index.html'
    indexPath: "myIndex.html",
    // Ĭ������£����ɵľ�̬��Դ�����ǵ��ļ����а����� hash �Ա���õĿ��ƻ��档
    filenameHashing: false,
    // �Ƿ��ڿ���������ͨ�� eslint-loader ��ÿ�α���ʱ lint ���롣���ֵ���� @vue/cli-plugin-eslint ����װ֮����Ч��
    lintOnSave: process.env.NODE_ENV !== "production",

    //�Ƿ�ʹ�ð�������ʱ�������� Vue �����汾������Ϊ true ����Ϳ����� Vue �����ʹ�� template ѡ���ˣ�������������Ӧ�ö������� 10kb ���ҡ�
    runtimeCompiler: false,

    // ����㲻��Ҫ���������� source map�����Խ�������Ϊ false �Լ�����������������
    productionSourceMap: false,

    // ���� webpack-dev-server ��ѡ�֧�֡�
    devServer: {
        host: "localhost",
        port: 8080, // �˿ں�
        https: false,
        open: true, //�����Զ����������

        // ���ö������
        proxy: {
            "/api": {
                target: "http://192.168.216.9:9000", // ����ģ�����ݷ�����
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "" // ȥ���ӿڵ�ַ�е�api�ַ���
                }
            }
        }
    }
};